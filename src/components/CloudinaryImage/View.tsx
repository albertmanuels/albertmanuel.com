import React, {
	ComponentPropsWithoutRef,
	useEffect,
	useRef,
	useState,
} from "react";
import Image from "next/image";
import { buildUrl } from "cloudinary-build-url";
import clsx from "clsx";

type CloudinaryImageProps = {
	publicId: string;
	className?: string;
	width: any;
	height: any;
	alt: string;
	mdx?: boolean;
	aspect?: {
		width: number;
		height: number;
	};
	noStyle?: boolean;
};

const CloudinaryImage = ({
	className,
	publicId,
	width,
	height,
	alt,
	mdx = false,
	aspect,
	noStyle = false,
	style,
}: CloudinaryImageProps & ComponentPropsWithoutRef<"figure">) => {
	const urlBlurred = buildUrl(publicId, {
		cloud: {
			cloudName: "albertmanuel",
		},
		transformations: {
			effect: {
				name: "blur",
				value: 1000,
			},
			quality: 1,
			rawTransformation: aspect
				? `c_fill,ar_${aspect?.width}:${aspect?.height},w_${width}`
				: undefined,
		},
	});

	const url = buildUrl(publicId, {
		cloud: {
			cloudName: "albertmanuel",
		},
		transformations: {
			rawTransformation: aspect
				? `c_fill,ar_${aspect?.width}:${aspect?.height},w_${width}`
				: undefined,
		},
	});

	const aspectRatio = aspect ? aspect?.height / aspect?.width : undefined;

	const RESIZED_MAX_WIDTH = 1000;
	const resizedToMaxWidth = mdx && +width >= RESIZED_MAX_WIDTH;

	return (
		<figure
			className={clsx(className, {
				"overflow-hidden": !noStyle,
				"mx-auto w-full": mdx && +width <= 800,
			})}
			style={{
				...(mdx && +width <= 800 ? { maxWidth: width } : {}),
				...style,
			}}
		>
			<div
				className="banner-blur"
				style={{
					position: "relative",
					height: 0,
					paddingTop: aspectRatio
						? `${aspectRatio * 100}%`
						: `${(+height / +width) * 100}%`,
				}}
			>
				<style jsx>
					{`
						.banner-blur::before {
							content: "";
							position: absolute;
							inset: 0;
							filter: blur(20px);
							z-index: 0;
							background-image: url(${urlBlurred});
							background-position: center center;
							background-size: 100%;
						}
					`}
				</style>
				<div className="absolute top-0 left-0">
					<span className="mt-0">
						<Image
							className="mt-0"
							src={url}
							width={
								resizedToMaxWidth ? Math.min(+width, RESIZED_MAX_WIDTH) : width
							}
							height={
								resizedToMaxWidth
									? (RESIZED_MAX_WIDTH * +height) / +width
									: height
							}
							alt={alt}
							blurDataURL={urlBlurred}
						/>
					</span>
				</div>
			</div>
		</figure>
	);
};

export default CloudinaryImage;

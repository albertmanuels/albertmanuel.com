import React, { ComponentPropsWithoutRef } from "react";
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
	priority?: boolean;
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
	priority = false,
	style,
}: CloudinaryImageProps & ComponentPropsWithoutRef<"figure">) => {
	const urlBlurred = buildUrl(publicId, {
		cloud: {
			cloudName: "albertmanuel",
		},
		transformations: {
			effect: {
				name: "blur:1000",
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
					backgroundPosition: "center center",
					backgroundSize: "100%",
					backgroundImage: `url(${urlBlurred})`,
				}}
			>
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
							priority={priority}
							alt={alt}
						/>
					</span>
				</div>
			</div>
		</figure>
	);
};

export default CloudinaryImage;

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle ? searchParams.get('title')?.slice(0, 100) : "Node.js Web Application Framework";

    // ?type=<type> - if undefined default to announcement
    const typeParam = searchParams.get('type') ?? "announcement";

    const typeAttributes: { [key: string]: string } = {
        announcement: "#A9A9A9",
        release: "",
        vulnerability: "#010409",
    };

    const type = typeAttributes[typeParam] ?? typeAttributes.announcement;


	return new ImageResponse(
		<div tw={`relative flex items-center justify-center bg-[#010409] text-[${type}] w-full h-full`}>
			<div tw="flex justify-between items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 1200 630"
				>
					<g clip-path="url(#a)">
						<g filter="url(#b)">
							<path
								fill="currentColor"
								fill-opacity=".5"
								d="M843 268.819c0-65.72-65.366-118.996-146-118.996s-146 53.276-146 118.996 65.366 118.997 146 118.997 146-53.277 146-118.997Z"
							/>
						</g>
						<g filter="url(#c)">
							<path
								fill="CurrentColor"
								fill-opacity=".5"
								d="M641.25 359.219C641.25 294.481 574.932 242 493.125 242S345 294.481 345 359.219c0 64.739 66.318 117.219 148.125 117.219s148.125-52.48 148.125-117.219Z"
							/>
						</g>
					</g>
					<defs>
						<filter
							id="b"
							width="798.668"
							height="744.661"
							x="297.666"
							y="-103.511"
							color-interpolation-filters="sRGB"
							filterUnits="userSpaceOnUse"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_3_88"
								stdDeviation="126.667"
							/>
						</filter>
						<filter
							id="c"
							width="802.918"
							height="741.106"
							x="91.666"
							y="-11.3339"
							color-interpolation-filters="sRGB"
							filterUnits="userSpaceOnUse"
						>
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feBlend
								in="SourceGraphic"
								in2="BackgroundImageFix"
								result="shape"
							/>
							<feGaussianBlur
								result="effect1_foregroundBlur_3_88"
								stdDeviation="126.667"
							/>
						</filter>
						<clipPath id="a">
							<path fill="#fff" d="M0-1h1200v631H0z" />
						</clipPath>
					</defs>
				</svg>
			</div>
            <div tw="absolute mx-auto flex max-w-xl flex-col text-center text-3xl font-semibold text-white">
                <h2>{title}</h2>
            </div>
		</div>,
		{
			width: 1200,
			height: 630,
			//   fonts: [
			//     {
			//       name: "Inter Medium",
			//       data: interMedium,
			//     },
			//   ],
		},
	);
}

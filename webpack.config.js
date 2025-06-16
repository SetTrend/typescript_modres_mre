import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "node:path";

export default
	[
		false,
		"eval",
		"eval-cheap-source-map",
		"eval-cheap-module-source-map",
		"eval-source-map",
		"cheap-source-map",
		"cheap-module-source-map",
		"source-map",
		"inline-cheap-source-map",
		"inline-cheap-module-source-map",
		"inline-source-map",
		"eval-nosources-cheap-source-map",
		"eval-nosources-cheap-module-source-map",
		"eval-nosources-source-map",
		"inline-nosources-cheap-source-map",
		"inline-nosources-cheap-module-source-map",
		"inline-nosources-source-map",
		"nosources-cheap-source-map",
		"nosources-cheap-module-source-map",
		"nosources-source-map",
		"hidden-nosources-cheap-source-map",
		"hidden-nosources-cheap-module-source-map",
		"hidden-nosources-source-map",
		"hidden-cheap-source-map",
		"hidden-cheap-module-source-map",
		"hidden-source-map",
	].map((item) =>
	({
		entry:
		{
			main: "./index.ts"
		},

		mode: 'development',

		devtool: item,

		output:
		{
			filename: "[name].js",
			path: path.resolve(import.meta.dirname, "dist", "" + item)
		},

		resolve:
		{
			// Add `.ts` and `.tsx` as a resolvable extension.
			extensions: [".ts", ".tsx", ".js"],

			// Add support for TypeScripts fully qualified ESM imports.
			extensionAlias:
			{
				".js": [".js", ".ts"],
				".cjs": [".cjs", ".cts"],
				".mjs": [".mjs", ".mts"]
			}
		},

		plugins:
			[
				new MiniCssExtractPlugin()
			],

		module:
		{
			rules:
				[
					{
						test: /\.([cm]?ts|tsx)$/,		// all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
						use:
						{
							loader: "ts-loader",
							options:
							{
								projectReferences: true
							}
						}
					},
					{
						test: /\.less$/,		// all files with a `.less` extension will be handled by `less-loader`
						use:
							[
								{
									loader: MiniCssExtractPlugin.loader
								},
								{
									loader: "css-loader"
								},
								{
									loader: "less-loader",
									options:
									{
										lessLogAsWarnOrErr: true
									}
								}
							]
					}
				]
		}
	})
	);
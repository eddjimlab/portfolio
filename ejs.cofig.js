
module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.ejs$/,
                    use: [
                        {
                            loader: "ejs-webpack-loader",
                            options: {
                                data: { title: "New Title", someVar: "hello world" },
                                htmlmin: true
                            }
                        }
                    ]
                }
            ]
        }
    };
};
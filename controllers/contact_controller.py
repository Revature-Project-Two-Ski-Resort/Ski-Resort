def route(app):
    @app.route("/contact")
    def contact():
        return "Contact us via Email: lamar.hinchen@revature.net"

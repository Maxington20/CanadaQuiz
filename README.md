# [CanadaQuiz](https://github.com/Mherrington8944/CanadaQuiz)

phonegap hello world. The config.xml sets the name and id:

```

<?xml version="1.0" encoding="UTF-8" ?>
<widget xmlns="http://www.w3.org/ns/widgets" xmlns:gap="http://phonegap.com/ns/1.0" id="io.github.rhildred.hellophonegap" version="0.0.1">

    <name>hello phonegap</name>

    <description>
        most basic of examples, responds to deviceready
    </description>
    <content src="index.html" />
    <author href="https://rhildred.github.io">
        Rich Hildred
    </author>
    <access origin="*" />
</widget>

```

The html5 phonegap code includes the javascript `cordova.js` file, which will be replaced during the build by a cordova.js that is built on the fly.

```

<!Doctype html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <h1>hello phonegap</h1>
        <h2> I can't believe it's this simple. ... </h2>
        <div id="connectionStatus" style="color:blue">Not connected to phonegap!</div>
        <script src="cordova.js"></script>
        <script>
            var phonegapReady = function(){
                oStatus = document.getElementById("connectionStatus");
                oStatus.innerHTML = "Now connected to phonegap";
                oStatus.style.color = "green";
            }

            document.addEventListener("deviceready", phonegapReady, false);

        </script>
    </body>
</html>

```

This can be loaded up on phonegap build, and turned into a apk that can be put on your phone.
"# CanadaQuiz" 

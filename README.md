# [CanadaQuiz](https://github.com/Mherrington8944/CanadaQuiz)

phonegap Canada Quiz. The config.xml sets the name and id:

```

<?xml version="1.0" encoding="UTF-8" ?>
<widget xmlns="http://www.w3.org/ns/widgets" xmlns:gap="http://phonegap.com/ns/1.0" id="io.Mherrington8944.CanadaQuiz" version="0.0.1">

    <name>Canada Quiz</name>

    <description>
        Simple quiz about Canada
    </description>
    <content src="index.html" />
    <author href="https://Mherrington8944.github.io">
        Max Herrington
    </author>
    <access origin="*" />
</widget>

```

The html5 phonegap code includes the javascript `cordova.js` file, which will be replaced during the build by a cordova.js that is built on the fly.

This can be loaded up on phonegap build, and turned into a apk that can be put on your phone.
"# CanadaQuiz" 

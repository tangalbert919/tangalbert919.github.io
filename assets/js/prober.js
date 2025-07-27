(function() {
    const proberButton = document.getElementById('prober-button');
    const proberInput = document.getElementById('prober-input');
    const proberResult = document.getElementById('prober-result');
    var protobuf = window.protobuf;

    function makeRandomString(length, characters) {
        var result = '';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    protobuf.load("/assets/proto/checkin.proto", function(err, root) {
        if (err) {
            throw err;
        }

        var fingerprint = proberInput.value.split("/");

        var temp = fingerprint[2].split(":");
        fingerprint.splice(2, 1, temp[0], temp[1]);

        var build = root.lookupType("tutorial.AndroidBuildProto");
        var checkin = root.lookupType("tutorial.AndroidCheckinProto");
        var request = root.lookupType("tutorial.AndroidCheckinRequest");
        var response = root.lookupType("tutorial.AndroidCheckinResponse");

        var buildMessage = build.create({
            id: proberInput.value,
            timestamp: 0,
            device: fingerprint[2],
        });

        var checkinMessage = checkin.create({
            build: buildMessage,
            lastCheckinMsec: 0,
            roaming: "WIFI::",
            userNumber: 0,
            deviceType: 2,
            voiceCapable: false,
            unknown19: "WIFI",
        });

        var requestMessage = request.create({
            imei: makeRandomString(15, '0123456789'),
            digest: "1-" + makeRandomString(40, '0123456789abcdef'),
            checkin: checkinMessage,
            locale: "en-US",
            timeZone: "America/Los_Angeles",
            version: 3,
            serialNumber: makeRandomString(8, '0123456789abcdef'),
            macAddrType: ["wifi"],
            fragment: 0,
            userSerialNumber: 0,
            fetchSystemUpdates: 1,
            unknown30: 0
        });

        var requestBuffer = request.encode(requestMessage).finish();

        //proberInput.value = requestMessage.serializeBinary();
    });

    proberButton.addEventListener('click', (e) => {
        alert('Copied to clipboard!');
    })
})();
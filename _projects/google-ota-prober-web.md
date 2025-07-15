---
layout: default
author: albert
title: Google OTA Prober - Web UI
description: Download device updates without using the device itself. Now available through the web.
---

## Google OTA Prober - Web UI

This prober allows you to download updates for any Android device with just a build fingerprint. As long as that device is using Google's update services, you can download an update for it, provided that Google has an update available.

The project is available [here](https://github.com/tangalbert919/google-ota-prober) as a Python CLI/GUI application, but if you do not wish to download it, you can also use the web UI here. I recommend using the application, as the web UI is currently a work-in-progress.

<script src="//cdn.jsdelivr.net/npm/protobufjs@7.5.3/dist/protobuf.min.js"></script>


<div class="mb-3">
    <input class="form-control" id="prober-input" aria-describedby="fingerprintHelp">
    <div id="fingerprintHelp" class="form-text">Example: OnePlus/OnePlusN200/OnePlusN200:12/SKQ1.210216.001/R.1a8c53e-1-16457e:user/release-keys</div>
    <input type="submit" class="btn btn-primary" id="prober-button">
</div>
<script src="/assets/js/prober.js"></script>

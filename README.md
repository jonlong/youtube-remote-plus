# YouTube Remote+

**For use with Line6 Helix and HX Stomp.**

Slow down, A/B loop, and navigate through YouTube videos via footswitch, using the QWERTY hotkeys feature in Command Center.

## Overview

YouTube Remote+ is a Firefox browser extension inspired by the _YouTube Remote_ preset in the [HX 2.8 firmware](https://line6.com/support/page/kb/effects-controllers/helix/helixhx-280-release-notes-r913/) that demonstrates how to assign keyboard shortcuts to footswitches in the Command Center.

This project takes _YouTube Remote_ further by adding A/B loop markers, speed controls, and seek controls to rewind and fast-forward, turning it into a hands-free practice tool that lets you find, loop, and slow down video segments on the fly.

## Hotkeys

| Command             | Default Hotkey       |
| :------------------ | :------------------- |
| Play/Pause          | `Ctrl + Alt + P`     |
| Set Marker A        | `Ctrl + Alt + 1`     |
| Set Marker B        | `Ctrl + Alt + 2`     |
| Toggle Loop Marker  | `Ctrl + Alt + M`     |
| Clear Markers       | `Ctrl + Alt + C`     |
| Speed Up            | `Ctrl + Alt + Up`    |
| Speed Down          | `Ctrl + Alt + Down`  |
| Reset Speed         | `Ctrl + Alt + R`  |
| Fast-foward         | `Ctrl + Alt + Right` |
| Rewind              | `Ctrl + Alt + Left`  |
| Toggle Seek Rate    | `Ctrl + Alt + S`     |

## Status


- :white_check_mark: Set Marker A
- :white_check_mark: Set Marker B
- :white_check_mark: Toggle Loop Marker
- :white_check_mark: Clear Markers
- :white_check_mark: Speed Up
- :white_check_mark: Speed Down
- :white_check_mark: Reset Speed
- :white_check_mark: Play/Pause
- :white_check_mark: Fast-foward
- :white_check_mark: Rewind
- :white_check_mark: Toggle Seek Rate
- :construction:     Save Settings
- :x:                Support Multiple Tabs/Windows
- :x:                Visual Feedback
- :white_check_mark: Edit Hotkeys
- :x:                Chrome Support
- :white_check_mark: Published

## Build from Source

**Requirements**

- [node](https://nodejs.org/) >= 10.0.0
- [yarn](https://yarnpkg.com/) >= 1.9.4

```
  yarn install
  yarn build
```

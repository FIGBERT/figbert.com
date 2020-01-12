+++
date = "2019-12-06"
title = "figENC"
slug = "figENC"
disable_comments = true
+++

# Summary
* A cross-platform application to provide RSA and symmetric key encryption to files of any size and type.
* Utilized the Python 3 `cryptography` library's `hazmat` objects to implement the encryption.
* Utilized the `tkinter` library for Python 3 to provide an intuitive GUI.
* The app is packaged into a `.app` and a folder with a `.exe`, for MacOS and Windows respectively.
# Encryption details
figENC generates two kinds of keys: 4096-bit asymmetric PEM RSA keys and Fernet symmetric keys. When generating RSA keys, 
there is an option to add a password to provide stronger encryption during serialization.

The app reacts responsively to file size: If a file larger than 446 bytes (the maximum file size possible to encrypt 
with a 4096 bit key, per [SquareRootOfTwentyThree][1] on Stackoverflow) is indicated for encryption, the app employs a 
[hybrid encryption system][2]. Otherwise, the app uses pure RSA.

The possible keys to be generated are saved to:
* `private_key.pem`
* `public_key.pem`
* `symmetric_key.key`
# GUI details
The GUI code is comprised of over 1000 lines of Python 3 `tkinter` code in the FIGBERT color scheme. The GUI code provides 
a clear, native experience to allow people with any amount of experience with encryption to use the app. The app takes 
advantage of the library's features like `messageBox` and `Toplevel` to provide create an interactive experience for the 
user.
# Future plans
Going forward, my main goal for the figENC project is to create a terminal version for [APT][3] and [Homebrew][4], so that 
users on ~~Linux~~ all platforms, and users with only shell access (i.e. SSH), can use the application.

# Downloads
| MacOS | Windows | GitHub |
|:-----:|:-------:|:------:|
|[{{< fab apple 5x >}}][mac]|[{{< fab windows 5x >}}][win]|[{{< fab github 5x >}}][repo]|

[1]: https://stackoverflow.com/a/11823119/11141223
[2]: https://en.wikipedia.org/wiki/Hybrid_cryptosystem
[3]: https://en.wikipedia.org/wiki/APT_(software)
[4]: https://brew.sh/
[mac]: https://github.com/therealFIGBERT/figENC/raw/master/Executables/figENC.dmg
[win]: https://github.com/therealFIGBERT/figENC/raw/master/Executables/figENC.zip
[repo]: https://github.com/therealFIGBERT/figENC

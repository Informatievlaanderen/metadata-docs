# Setup

## Windows

Install Zensical in a virtual environment (python). This will probably only be possible for external / developer machines.

```powershell
python -m venv .venv  
.venv\Scripts\activate
pip install zensical
```

## Linux

On Linux python is a valid option as well, activate the script in a slightly different way.

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install zensical
```

# Run locally

Activate the environment locally:

```bash
# on linux
source .venv/bin/activate
# on windows
.venv\Scripts\activate
```

In the activated shell, build and run the project:

```bash
zensical build
zensical serve
```
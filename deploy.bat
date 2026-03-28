@echo off
echo === TireMaster NN: Deployment Script ===
echo.

:: Check for Git installation
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: Git is not installed! Please install Git.
    pause
    exit /b
)

:: Initialize git if not already a repository
if not exist ".git\" (
    echo Initializing local Git repository...
    git init
)

:: Ensure remote origin is set correctly
git remote add origin https://github.com/Kuala2/Referens-website-2.git 2>nul
if %errorlevel% neq 0 (
    git remote set-url origin https://github.com/Kuala2/Referens-website-2.git
)

echo Adding changes...
git add .

echo Creating commit...
git commit -m "Site Update: %date% %time%"

echo.
echo Preparing main branch...
git branch -M main

echo.
echo Pushing to GitHub (https://github.com/Kuala2/Referens-website-2)...
git push -u origin main

echo.
echo === Deployment Finished! ===
echo.
pause

if ! command -v git &> /dev/null
then
    echo "git could not be found"
    exit
fi

if ! command -v mdzk &> /dev/null
then
    echo "mdzk is not installed, installing now"

    exit
else 
    echo "mdzk is installed, now building website"

fi
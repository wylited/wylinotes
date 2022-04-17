if ! command -v git &> /dev/null
then
    echo "git could not be found"
    exit
fi

if  command -v mdzk &> /dev/null
then
    echo "mdzk is not installed, installing now"
    git clone https://github.com/mdzk-rs/mdzk.git
    git reset --hard e26b93614b2e4ed845a1437a44a85852981e31a1
    cd mdzk
    cargo build --release
    cd ..
    /bin/cp ./mdzk/target/release/mdzk /usr/local/bin/mdzk
    rm -rf ./mdzk
    echo "mdzk has been installed"
    mdzk build
    exit
else 
    echo "mdzk is installed, now building website"
    mdzk build
fi

echo "[1/4] Add heroku ssh to known hosts"
ssh-keyscan heroku.com >> ~/.ssh/known_hosts

echo "[2/4] Show available repositories"
git remote -v

echo "[3/4] Install global NPM"
sudo npm i -g npm

echo "[4/4] Deploy to heroku"
git push -f https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP.git master

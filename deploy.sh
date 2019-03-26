npx next build
npx next export -o .tmp/dist
cd .tmp/dist
tar -czvf ../servicios3ros.tar.gz .
cd ../..
ssh jon.soy "cd ~/servicios3ros; rm servicios3ros.tar.gz"
scp .tmp/servicios3ros.tar.gz jon.soy:~/servicios3ros/servicios3ros.tar.gz
ssh jon.soy "cd ~/servicios3ros/dist; rm -rf *"
ssh jon.soy "cd ~/servicios3ros; tar -xzvf servicios3ros.tar.gz -C dist"

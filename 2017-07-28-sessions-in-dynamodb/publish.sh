SKILL_NAME=$1
NOW=$(date +%s)
ZIP_FILE="$SKILL_NAME-$NOW.zip"

if [ ! -f ./$ZIP_FILE ]; then
  echo "$ZIP_FILE not found. Creating file..."
  chmod -R +rw $SKILL_NAME
  cd $SKILL_NAME
  zip -r  "../$ZIP_FILE" * -x "*.DS_Store"
  echo "$ZIP_FILE created."
  cd ..
  aws lambda update-function-code --function-name $SKILL_NAME --zip-file fileb://$ZIP_FILE
  if [ ! -f ./builds ]; then
    mkdir builds
  fi
  mv $ZIP_FILE ./builds/
fi

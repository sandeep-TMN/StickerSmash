# npx expo prebuild

npx react-native bundle \
    --platform android \
    --dev false \
    --entry-file index.android.js \
    --bundle-output android/app/src/main/assets/index.android.bundle \
    --assets-dest android/app/src/main/res

cd android
./gradlew assembleRelease
cd ..

firstDevice=$(adb devices | awk 'NR>1 && $2=="device" {print $1; exit}')

if [ -z "$firstDevice" ]; then
  echo "No connected Android device found."
  exit 1
fi

adb -s $firstDevice install android/app/build/outputs/apk/release/app-release.apk

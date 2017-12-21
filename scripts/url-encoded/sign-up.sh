#!/bin/bash

# sh scripts/url-encoded/sign-up.sh

curl "https://ga-library-api.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD_CONFIRMATION}"'"
    }
  }'

echo

# got to json file and inside folder with same name and C and P email \ password object where
# it says data

# EMAIL=marine18 PASSWORD=papas PASSWORD_CONFIRMATION=papas sh scripts/json/sign-up.sh

# create sign up form in index.html

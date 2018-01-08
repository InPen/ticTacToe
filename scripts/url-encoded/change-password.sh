#!/bin/bash

# ID=2 sh scripts/url-encoded/change-password.sh

curl "https://ga-library-api.herokuapp.com/change-password/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/x-www-form-urlencoded" \
  --data-urlencode ''

echo

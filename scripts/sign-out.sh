#!/bin/bash

# ID=2 sh scripts/sign-out.sh

curl "https://ga-library-api.herokuapp.com//sign-out/{$ID}" \
  --include \
  --request DELETE \

echo

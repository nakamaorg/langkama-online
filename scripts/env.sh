#!/bin/sh
sed -i 's/GH_PERSONAL_ACCESS_TOKEN/${{ secrets.GH_PERSONAL_ACCESS_TOKEN }}/g' .npmrc
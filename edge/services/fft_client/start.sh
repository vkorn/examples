#!/bin/sh

./client -b ${MQTT_BROKER} -u ${MQTT_CLIENT_USER} -p ${MQTT_CLIENT_PASS} -c ${MQTT_CLIENT_CLIENT} -r ${SAMPLE_RATE} -f ${RECORD_FRAME}
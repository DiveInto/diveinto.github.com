---
layout: post
title: "kafka   a distributed messaging system"
description: ""
category: 
tags: []
---
{% include JB/setup %}

Log:

name: the offset of first message this log segment file contains
structure:
  log length : 4 byte integer N show the length of payload
  payload : N bytes of message data

message:

message length : 4 bytes (value: 1+4+n) 
"magic" value  : 1 byte
crc(checksum)            : 4 bytes
payload        : n bytes


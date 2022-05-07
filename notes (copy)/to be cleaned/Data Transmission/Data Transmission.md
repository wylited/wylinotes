---
title: Data Transmission
date created: 2021-12-13 13:59
date updated: 2022-01-05 17:38
---

[[comp_sci]]

## Data Transmission

When we need to transmit data. Data is broken down into packets to be transmitted.

## Packet Structure

| Section       | Description                                                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Packet Header | The header contains the origin address, destination address and packet number. <br> It usually weights 20 bytes and can have additional information if necessary |
| Payload       | The main information of the packet                                                                                                                               |
| Trailer       | To signify that this is the end of the packet                                                                                                                    |

## Packet Switching

After the data is broken down into packets, it needs to be routed from one computer to another. This is where packet switching comes into play.

The packets can take several different routes and arrive out of order. When all of them have arrived the packets are rearranged.

A **router** decides how the packet will reach its destination

## Transmission Methods

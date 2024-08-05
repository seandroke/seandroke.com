#!/bin/bash
gradle --stop
gradle build --continuous --quiet --refresh-dependencies &
gradle bootRun
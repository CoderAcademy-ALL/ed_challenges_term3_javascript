# [Get Zodiac Sign](https://edstem.org/au/courses/8571/challenges/70272)

You may or may not care about astrology, but some people do a lot and there's a huge market for astrology apps.

Write a function `getSign` which takes a string as an input and returns either a zodiac sign as a string ( e.g. `'Virgo'`) or the string `'Invalid Date'` if the input string is not formatted correctly. Check out the mdn docs for the appropriate formatting, if the Date constructor accepts it as a valid format your function should too! Look at the docs and use any of the methods available to you to help you to handle the challenge.

How you structure, parse, and implement the Zodiac sign data in order to parse a date to a sign is totally up to you.

The zodiac dates can be subject to debate. For the context of this challenge you should assume the following **inclusive** date values. eg: the first and last days of **Aries** are the 20th March and 20th April respectively.

- **Aries**: March 20-April 20
- **Taurus**: April 21-May 21
- **Gemini**: May 22-June 21
- **Cancer**: June 22-July 22
- **Leo**: July 23-August 22
- **Virgo**: August 23-September 22
- **Libra**: September 23-October 22
- **Scorpio**: October 23-November 21
- **Sagittarius**: November 22-December 21
- **Capricorn**: December 22-January 20
- **Aquarius**: January 21-February 19
- **Pisces**: February 20-March 19

_Fun fact:_ these dates are actually based off of the Persian or Iranian Calendar:

https://calcuworld.com/calendar-calculators/persian-calendar-converter/

https://en.iran.ir/about/iranian-calendar

Return all strings with a Capital letter, as above.

## Examples

- `getSign("1996-01-02") // "Capricorn"`
- `getSign("02/26/1990") // "Pisces"`
- `getSign("April 20 2020") // "Aries"`
- `getSign("datesAreHard") // "Invalid Date"`

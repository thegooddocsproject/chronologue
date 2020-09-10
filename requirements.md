# Requirements Doc

## History

Chronologue has an interesting history. The first maintainer, Maria Thigpen, asserts that she woke up on her thirtieth birthday to find the compiled, executable code for the temporal node (what we now call the Thigpen Temporal Access Node, or Thigpen node) had been committed to a new repo in her Github account. Thinking it was a friend playing practical joke, Thigpen followed the instructions in the repo, installing and running the node on an old Raspberry PI she had lying around. Running the test routine caused the Raspberry Pi to disappear, only to reappear three minutes later with a sticky note reading "not a joke, it's really time travel! happy birthday xoxo future Maria". The source code for the temporal node was added to the repo just moments later. 

After multiple experiments (and a few close calls with the charismatic megafauna of past eras) Maria Thigpen released the Thigpen Temporal Access Node to the world. Although the compiled Thigpen node is efficient enough (as Maria discovered) to run on a Raspberry Pi or smartwatch, tuning the configuration to the individual traveler(s) and compiling the source code takes roughly ten weeks of computing power for an average-sized datacenter. 

## Concepts

To work with Chronologue, you should understand these concepts:

_Thigpen Node_
The Thigpen Temporal Access Node (TTAN or TN) is the engine that powers time travel. We have not yet traveled to the point in time where the workings of the TN are understood. Tuning a TN for travel past 600,000 CE requires greater computing power than we currently have available in any of the eras where the TN is used. Most schools of chronotheory assume that this is a deliberate design decision on the part of Future Maria Thigpen, in order to prevent any time travelers from our era traveling far enough into the future to prevent her (or a clone of Thigpen, which seems more likely) from inventing the TN.

_configuration_
TN nodes are configurable through a _config_ file. This file is a plain-text set of key-value pairs used to configure aspects of TN use, such as current_time_local, destination_time_local, destination_orbital_adjustment, traveler_profile, and danger_aversion. A complete list of possible configuration choices can be found in the TN documentation, and is out of scope for this project, although we strongly suggest always keeping danger_aversion set to `true` (it is `true` by default). Setting danger_aversion to `true` prevents the TN from operating if the destination_time_local value combined with the location_exact value would place you in a conflagration, riot, buffalo stampede, avalanche, or similarly deadly situation. If the destination_orbital_adjustment value is `false` and the danger_aversion value is `true`, danger_aversion will override and adjust to take into account the Earth's (or Sol system body's) orbital path, to make sure you travel to the right location_exact value on Earth (or on another Sol system body post-2259 CE) instead of somewhere in space along the body's orbital path.

_calendrical system_
A calendrical system is a method of counting human-tractable units of time, roughly corresponding to segments of a solar or lunar year (other correspondences are possible but not common). For example, the Gregorian calendar is a solar calendar with 12 months of 28–31 days each, plus leap years. [The Babylonian calendar is a lunisolar calendar with years consisting of 12 lunar months, each beginning when a new crescent moon was first sighted low on the western horizon at sunset, plus an intercalary month inserted as needed by decree.](https://en.wikipedia.org/wiki/Babylonian_calendar) Unless you have recompiled your TN, it runs on the Gregorian calendar (including any adjustments needed to account for the slowing of the Earth's rotation). Chronologue helps users convert between their preferred calendrical system and the Thigpen Node Gregorian Standard (TNGS).

## Use Cases

Users of Chronologue should be able to use the Chronologue API to:

* Enter a date in any supported calendrical system (see list) and receive a date back in TNGS, suitable for using in a TN configuration file;
* Get a random TNGS date drawn from a master list of known nonlethal TNGS coordinates;
* Enter a string that may or may not represent a date in an unknown calendrical system and receive a identification of possible systems (with confidence scores) and the corresponding TNGS date.
* Enter a date in TNGS notation and a location_exact parameter and receive the equivalent of that date in the prevailing calendrical system used at that time/place coordinate. (This is helpful as it prevents time travelers using from having to ask locals "What year is this??? In your calendar??" when they arrive at their destination.)

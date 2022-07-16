---
title: How Chronologue works
sidebar_label: How Chronologue works
sidebar_position: 20
draft: true
---

<!-- ## Overview --> 

This document presents concepts you need to understand before using Chronologue. The document assumes that you have a scientific background, for example you are a physicist or astronomer. The document discusses the fundamentals of time travel and its constraints.  
<!-- Maybe add what assumptions the document is making about the audience. Something like: The document assumes you are comfortable learning about complex topics. --> 

<!-- Are you planning to add a glossary? You could gather all the defintiions here, like Time, nonspatial, telescope, wormhole -->


## What is time? 
Time is “a non-spatial continuum” [Merriam Webster](https://www.merriam-webster.com/dictionary/time). “Nonspatial” means that time has no size, nor can it be touched. However, time can be measured in increments of different sizes, such as seconds, minutes, hours, days. To visualize time, we can read a clock or look at a calendar. Different cultures use different calendars. The Chronologue telescope uses the [Gregorian calendar](https://en.wikipedia.org/wiki/Gregorian_calendar).


## What is spacetime?
Spacetime is when you combine the three spatial dimensions (3D) and time, resulting in a four-dimensional (4D) system. Since there is no exact visual representation of a 4D space, you will often see pictures like this to clarify the relationship between space and time:

![Source: European Space Agency](https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2015/09/spacetime_curvature/15576375-1-eng-GB/Spacetime_curvature_pillars.jpg)

Large objects, like stars and planets, deform spacetime. This deformation is proportional to the size of the object with larger objects causing more deformation. The curvature of spacetime affects how fast time progresses, which is referred to as _nonlinear_ time.

You can observe this effect on earth as well: clocks on the mean sea level work at normal speed, whereas clocks on a plane at 10,000 km go a bit slower. 

> ⚠️ Note: The following paragraphs are pure fiction. 

## What is the Chronologue?

Chronologue consists of three things:
* A time-travel telescope
* An API to write and retrieve event data
* A website to view recorded events [Chronologue Website](https://chronologue.netlify.app/)


### Time-travel telescope

The light that reaches the earth has travelled across the universe for several, sometimes millions of years. This means that the light you can observe with the help of telescopes is a snapshot of the past of its source star. 

<details><summary>Real world example</summary>
You’re at home watching the football world cup via an internet stream and you notice the connection lags a bit. Suddenly you hear your neighbors cheer aloud but your screen only shows people chasing a football. Two seconds later, you also see that a team scored a goal. 
</details>

The time-travel telescope is an upgraded, more complex telescope that lets you **look** at the past, the present, and also the future. Moreover, the Chronologue time-travel telescope gives you access to any location in the universe. 

> ⚠️ Note: While Chronologue tries to predict the future as accurately as possible, there is no guarantee that the recording matches with the actual events 100%.


### How does the Chronologue time-travel telescope work?


The time-travel telescope software manipulates spacetime to create a path between to different points: your point in spacetime and the desired point you want to look at. This path, or tunnel, is known as a [wormhole](https://en.wikipedia.org/wiki/Wormhole). A wormhole connects different places in space, different points in time, or both.

![Source: American Physical Society](https://physics.aps.org/assets/3dbae5fd-a0e8-4b78-81be-b10bb92fe6f2/e40_2_medium.png)

It takes an exorbitant amount of energy to create a wormhole. Therefore, there is only one time-travel telescope in the world, governed by the Chronologue project. 
To access to the time-travel telescope, you need to fill out a request for time-travel (RTT). The Chronologue project reviews RTTs to ensure that the time-travel telescope is used in a way that benefits humanity in the best way possible.


### Chronologue API

The Chronologue API is a simple database that includes events of astronomical events around the world, ranging from the past to distant future. When the time-travel telescope records a new event, it writes the data into a [JSON file](https://github.com/thegooddocsproject/chronologue/blob/main/data/data.json). 
The Chronologue website retrieves the data and outputs it in a visually appealing format. 

### Chronologue website

The [Chronologue website](https://chronologue.netlify.app/) shares all events that the Chronologue time-travel telescope has recorded. If you want to record a specific point in time, you need to fill out a request for time travel. 

<!--If you want to integrate Chronologue within your program, have a look at the Chronologue SDK. Active development is still up for discussion...-->


## Related links
- [Parts of the Chronologue Time Travel Telescope](docs/chronologue/c_parts_of_the_telescope.md)
- [Overview of the recording process](docs/chronologue/c_recording_process.md)
- [Chronologue API Overview](docs/API/c_API_overview.md)
- [PBS "Spacetime": General Relativity & Curved Spacetime Explained!](https://youtu.be/AwhKZ3fd9JA?t=359)

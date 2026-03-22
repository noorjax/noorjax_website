export const portfolioItems = [
  {
    title: 'Optimization for Sensor Locations to Detect Sewer Overflows',
    slug: 'optimization-for-sensor-locations-to-detect-sewer-overflows',
    categories: ['Agent-Based', 'Optimization', 'Parameter Variation'],
    content: `## Challenge

The purpose of the project was to validate a technique to select monitoring locations and times that best reduce the probability and consequences of sewage overflows.

In physical terms, the problem represents movement of ultrasonic level monitors through discrete locations in a sewer network. The monitors move in both a distance and direction in accordance with rules established by a search algorithm.

As the monitors move, they change their state, defined by a "Risk Priority Number" (RPN). The monitors act individually but it is their collective RPN that needs to be optimized. The goal is for the monitors to seek "hot spots" in the environment where the RPN is highest. RPNs are known to cluster within the environment as illustrated below. The deepest purple color codes indicate the highest clusters of RPN. Red line segments are a redundant indication of high RPN.

![Hotspot clusters in the sewer network](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows/hotspot-clusters.png)

The main objective was to generate a tool using AnyLogic to parameterize the problem and to have an easy and clean method to develop the best optimization algorithm.

## Solution

The data was imported from GIS files and cleaned using R. The cleaned data was exported to an Excel file to be used by AnyLogic directly. Using R in this case was easier and faster than processing the data using the ShapeFile and JAVA directly in AnyLogic. It is generally a good idea to process the data before using it in AnyLogic.

The monitors can move in different ways depending on the optimization algorithm chosen. The idea was to enhance the simulated annealing algorithm and compare it to three others:

- The basic version of simulated annealing algorithm
- The greedy algorithm
- The sequential search

![Visualization of the simulation model](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows/visualization.png)

The map shows the manholes with the different characteristics of the search parameters (monitors, hotspots, manholes and search reach) and graphs on the evolution of the objective function from iteration to iteration. The map was generated using Euclidean coordinates since the shapefile provided by the client didn't have the geolocation of the manholes, but instead had a transformation to Euclidean space.

In this project, the client was very participative and interested in doing most of the analysis himself, so the focus was mainly oriented into developing tools within the simulation model to help the client perform those analyses. The client learned how to use the simulation model thoroughly. We then worked together to improve the enhanced simulated annealing algorithm.

## Outcome

The model was very useful for the client to understand different characteristics of the system and the use of diverse parameters necessary to generate hotspots and to initialize the position of monitors in the real world. It was also very insightful for the client to find a way to improve the algorithm by testing a number of parameter combinations and small adjustments to enhance the simulated annealing algorithm. We worked step-by-step making small changes progressively until we found a good solution that fulfilled the initial needs.

## Project Features

- **Industry:** Wastewater
- **Model:** Agent-Based
- **Duration:** 11 months`,
  },
  {
    title: 'Network Optimization and Simulation of Drones Supporting Fire Missions',
    slug: 'network-optimization-and-simulation-of-drones-supporting-fire-missions',
    categories: ['Agent-Based', 'Optimization'],
    content: `## Challenge

Several fires affect England throughout the year, some of them destroying vast areas of land. While firefighters do their job amazingly, it is possible to improve the quality of fire fighting activities by sending drones to the fire location in order to gather information before and during the mission.

The purpose of this project was to choose the correct drone design (endurance and speed), the right number of drones to use in the country, and the geo-location of hubs where these drones must be located in order to cover as much land as possible while maintaining low costs.

## Solution

The simulation model was built in AnyLogic using an Agent-Based approach, with three agents interacting with each other: the drone, the fire station (where the hubs are located), and the fire.

The model has an initial user interface where four different parameters can be controlled: the drone speed, the drone endurance, the hub seed, and the total number of drones in the system. The hub seed defines, based on the total number of drones, which fire stations are going to be used as hubs and how many drones will be available in each hub.

![Drone simulation user interface](/images/portfolio/cases/network-optimization-and-simulation-of-drones-supporting-fire-missions/drone-ui.png)

The fires generated in the simulation model were all the fires that happened between 2014 and 2018. The purpose was not to predict how fires would attack in the future, but to find a pseudo-optimal solution for the drone design and distribution assuming that the fires will maintain the same behavior. The model also considered wind data, which affected the movement of the drones and the altitude in which they would fly to reduce its effect.

### Optimization Approach

An optimization experiment was developed with the following restrictions:

- At least 75% of fires must be covered. A fire is covered if the nearest hub is able to send a drone with enough endurance to stay at least 7.5 hours in the mission (under neutral wind conditions).
- Arrival before fire trucks must occur at least 90% of the time.

AnyLogic uses OptQuest, a state-of-the-art optimization engine that uses heuristic methods to find pseudo-optimal solutions of highly non-linear problems.

The most powerful feature of heuristic methods is that they use random parameters and search in the surroundings of the objective function space if a good solution is found. Nevertheless, the size of this problem is too big and too complex to handle appropriately. With almost 1,400 fire stations, the optimization algorithm would need to have one variable (number of drones) for each fire station, and this would require insane computer power.

To simplify this, a random generator seed was used (called hub seed). The optimization algorithm generates a solution based on the hub seed and the number of drones, which defines a network of randomly distributed hubs with a random number of drones on each hub. This method relaxes the optimization by thousands of times and should still produce good results, particularly because the fire stations are already distributed based on the fire distribution requirements in the country.

## Outcome

As usual in our projects, the client was very involved and used the tool provided to make their own analysis using the model and the Excel exports generated by the simulation with raw data. The study now continues on the client side using the simulation as part of the full study.

## Project Features

- **Industry:** Drones
- **Model:** Agent-Based
- **Duration:** 4 months`,
  },
  {
    title: 'Traffic Intersection',
    slug: 'traffic-intersection',
    categories: ['Discrete Events', 'Optimization', 'Parameter Variation', 'Road Traffic Library'],
    content: `## Challenge

The objective of this simulation was to compare traffic flow and waiting times using optimized fixed traffic light timings against intelligent traffic lights using cameras to process the position and speed of the cars present in each side of the intersection. Each side of the intersection has five lanes: two allowing cars to turn left, and three allowing cars to go straight. These five lanes are controlled by traffic lights, with an independent lane with no traffic light that allows cars to turn right.

## Solution

This model was implemented in AnyLogic using the road traffic library.

### East Road Structure

![East road structure for the simulation](/images/portfolio/cases/traffic-intersection/road-structure.png)

There are five lanes that go towards the intersection and one lane that allows cars to turn right. There are also three lanes that go away from the intersection coming from the west or from the north and an additional lane for cars coming from the south. Every side of the intersection works in the exact same way. Additionally, there is a front lane area which defines the cars that are in the first row when the light is red, a 50 meters line that defines how far the camera is able to see, and a 100 meters line used to analyze accumulation of cars.

### Base Scenario

To accurately compare fixed traffic lights with intelligent traffic lights using cameras, it was important to optimize traffic light durations. An optimization experiment was performed in AnyLogic. The duration of the four green lights were defined as parameters to change with an objective function equal to the number of cars processed. The optimal durations after optimization with a total of 7,164 processed cars in an hour were:

- **North:** 15 seconds
- **West:** 10 seconds
- **South:** 16 seconds
- **East:** 16 seconds

### CCTV Scenario -- Intelligent Algorithm

The challenge was to find an algorithm to improve traffic flow using cameras effectively. Several ideas were tested, such as:

- Using virtual loops to count how much time passes in each line between one car and another
- If there are no cars in the front lane area, the traffic light wouldn't turn green

![Intelligent traffic algorithm flowchart](/images/portfolio/cases/traffic-intersection/flow-rates.png)

This algorithm has two parameters that need to be optimized: the maximum number of cars waiting after the 50-meter mark to turn the light from green to red, and the minimum number of cars waiting to turn the light from red to green. Through optimization, the best values were 13 and 17 seconds respectively.

## Outcome

This study showed that in this intersection, with a high flow of cars and intense traffic, it is possible to use cameras with only 50 meters reach to improve not only the flow of cars but also to decrease waiting times. The algorithm used is very simple and uses basic information to make decisions. The improvement is only 1.7% of the traffic flow, so the economic implication of having this technology in place should be considered compared to the benefit.

## Project Features

- **Industry:** Traffic
- **Model:** Discrete Events, Road Traffic Library
- **Duration:** 1 month`,
  },
  {
    title: 'UK Prison Population Growth',
    slug: 'optimization-for-sensor-locations-to-detect-sewer-overflows-2-2',
    categories: ['Agent-Based', 'Discrete Events', 'System Dynamics'],
    content: `## Challenge

The prison population of the UK has increased more than 400% in the last century and about 90% from 1990 to 2016. These numbers seem alarming and generate an incentive to spend resources to understand the projection in the next 20 years under a scenario where prisons are already overcrowded.

![Prison population in England and Wales](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/prison-population.png)

Nevertheless these numbers are perhaps misleading, considering that since the prison population reached its maximum in November 2011, it has since stagnated. So, has the UK reached a plateau? Will the population continue increasing with no control?

![Prison population at month end](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/prison-month-end.png)

It is necessary to consider also that the number of crimes has decreased, which should from common sense lead to a decrease in the prison population in the long term.

![Summary statistics of crime](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/crime-summary.png)

Prison population and crime are negatively correlated, and at worst if the crime has been constant, it will still have no effect on the population -- so other policies have to be associated with the increase. The objective was to analyze this problem using public government data and estimate how the population in prisons will evolve in the next 10 years.

## Solution

The simulation was built with a multi-model mind-set, being agnostic to any particular simulation paradigm: discrete-events, agent-based, and system dynamics.

![Criminal justice process](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/criminal-justice-process.png)

### System Dynamics Model

The System Dynamics model represents the abstract macro view of the system. It shows the high-level vision of the population dynamics, where new population arrives at an annual rate and is put in prison with a certain rate. This section stores the rehabilitated and released offenders for a general view on population evolution.

![System Dynamics model](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/system-dynamics.png)

### Discrete-Events Model

The Discrete-Events model represents the criminal justice process for people that do criminal actions and are put into court. New criminal cases come from 3 different sources: never imprisoned, rehabilitated, and released offenders. These individuals are put into court and can be either freed, put in bail, or put in remand, and later sentenced.

![Discrete Events model](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/discrete-events.png)

### Agent-Based Model

The Agent-Based section was generated to understand the main transitions from one state to the other for an individual potential prisoner, actual prisoner, or individual in parole.

![Agent-Based model](/images/portfolio/cases/optimization-for-sensor-locations-to-detect-sewer-overflows-2-2/agent-based.png)

## Outcome

There is misleading information regarding how the prison population is evolving in the UK. Some sources hypothesize that the pressure of the media and the changes in sentences length are the key factors leading to a severe increase in the population and overcrowding. But policies always switch towards current tendencies. Overcrowded prisons can lead to a reduction in sentences and more people being released on parole.

The results show that overcrowding leads to putting more category A prisoners into category B facilities, which can decrease the safety perception from UK citizens. The simulation shows this problem but also that the problem stabilizes in the long run.

This study showed how the increase in prison population may not happen, which is consistent with statistical analyses showing that even though a small increase is projected, the confidence interval is quite wide and a decrease is perfectly plausible.

## Project Features

- **Industry:** Government and Prisons
- **Model:** Discrete Events, System Dynamics, Agent-Based
- **Duration:** 1 month`,
  },
  {
    title: 'People Flow in an Office',
    slug: 'people-in-an-office',
    categories: ['Discrete Events', 'Pedestrian'],
    content: `## Challenge

The challenge was to quickly create a proof of concept simulation of people working and interacting in an office. The objective was to understand which areas of the office yield more traffic, and which areas are less visited. The activities to be captured included:

- Working in desks, library, hangout area, gathering space, and balcony
- Using the restrooms
- Attending meetings
- Eating lunch
- Using the coffee area and the kitchen

## Solution

To build this model, the pedestrian library of AnyLogic was used in combination with the process modeling library. This model was created in less than one day, demonstrating that a simple proof of concept can be built extremely fast with clearly communicated assumptions. Since this office didn't exist and no data was available, conservative assumptions were generated independently. The client also needed a quick solution, so simplifying the model to avoid wasting time looking for nonexistent data was the right decision.

![Density map in the office](/images/portfolio/cases/people-in-an-office/density-map.png)

## Outcome

The client needed this proof of concept as part of a proposal to design an office layout. The output was a video where the office population could be easily seen for distribution to different stakeholders that may have difficulties using AnyLogic or executing standalone applications. The video was presented as part of the full proposal. Even though the simulation was not the protagonist this time, it was used as an additional data point to support the office layout design.

## Project Features

- **Industry:** Office
- **Model:** Discrete Events, Pedestrians
- **Duration:** 1 day`,
  },
  {
    title: 'Paint Manufacturing Proof Of Concept',
    slug: 'propan-raya',
    categories: ['Agent-Based', 'Discrete Events', 'Fluid Library'],
    content: `## Challenge

This client wanted to quickly build a proof of concept of its current paint manufacturing process, mixing different liquids, additives, and powders to create the final product and put it in cans using moving and static tanks. The objective was to understand if AnyLogic was the right tool for them compared to Arena. With a successful result, the client was interested in designing new manufacturing plants using AnyLogic.

## Solution

The first step was to work on the definition of the processes with the client to understand the manufacturing process. This is a key activity: it is much cheaper and faster to develop and update a process map first because it can be validated before even beginning to generate a simulation. With the process map validated, the simulation modeling development is very straightforward.

![Paint manufacturing process map](/images/portfolio/cases/propan-raya/process-flow.png)

The model was developed using AnyLogic with the fluid library, discrete-events, and agent-based state charts. All the mixing processes of additives, powders, and liquids were simulated. The model also shows the transportation of mixed products with moving tanks to the conveyor location where cans were filled and closed. No particular analysis was performed since the client only wanted to develop a proof of concept.

## Outcome

The client was satisfied with the outcome developed in only a few days. This demonstrates that very complex processes can be built in a very short time. The client was interested in building a team of modelers in the company, so using this model as a starting point, a course was made in the company to accelerate the AnyLogic learning curve for employees.

## Project Features

- **Industry:** Paint Manufacturing
- **Model:** Fluid Library, Discrete Events, Agent-Based
- **Duration:** 1 week`,
  },
  {
    title: 'Platoon Vehicles',
    slug: 'platoon',
    categories: ['Agent-Based', 'Discrete Events'],
    content: `## Challenge

This client wanted to prove the hypothesis that using an automated high-quality car as the leader of a platoon of other automated cars in a highway is better in terms of safety and speed compared to using a manual truck or bus driven by a human as the leader.

## Solution

In AnyLogic, the Road Traffic Library is generally used to model vehicles on a road, but it is not possible to use platoons since we have no control over the AI of the cars. We had to use the Process Modeling Library / Agent-Based hybrid to create this. A 2-mile road was created with several obstacles in between (rain, holes, accidents, hazards, and moving entities crossing the road), and according to the characteristics of the leader (sensors, sonars, passengers, etc.) the platoon would resolve the obstacles in different ways by reducing the speed, detecting the obstacle from a long distance, or making a full stop.

![Top and front cameras of the platoon](/images/portfolio/cases/platoon/platoon-cameras.png)

## Outcome

The conclusion was that the automated car was better in terms of safety (faster stop, better understanding of road obstacles) and speed (completed the 2 miles faster) than the bus or truck driven by a human, confirming the hypothesis of the client.

## Project Features

- **Industry:** Traffic, Platoon
- **Model:** Discrete Events, Agent-Based
- **Duration:** 1 week`,
  },
  {
    title: 'Warehouse with Bins',
    slug: 'warehouse-with-bins',
    categories: ['Discrete Events'],
    content: `## Challenge

This client wanted to optimize the time it takes for a set of operators to do the picking process based on a list of 15 items. The strategy was to locate the products with more demand in better positions and compare the resulting time with the time currently needed.

## Solution

The solution was developed in AnyLogic using exclusively the process modeling library. The location of each product was defined in an Excel database and the picking list was defined randomly based on the statistics of real picking lists.

![Warehouse 2D simulation](/images/portfolio/cases/warehouse-with-bins/warehouse-2d.png)

In these cases, the normal procedure is to generate a comparative experiment. However, since the assumption was that a product was always available, the simulation was created as a race between the group looking for products in the old bins and the group in the new bins. This allowed clear visualization of how and why the differences in time were so significant.

## Outcome

The conclusion was that the new positions saved around a minute of time in average for each picking when using 2 workers. Nevertheless, when reaching 4 workers, the new positions made no difference at all and were even worse with 5 workers. Optimizing warehouse positions to minimize time is a very complicated mathematical problem, so visualizing clearly in which cases the new positioning was better proved very useful.

## Project Features

- **Industry:** Warehouse
- **Model:** Discrete Events
- **Duration:** 2 weeks`,
  },
  {
    title: 'A Supply Chain and Distribution Network B2C & B2B',
    slug: 'a-supply-chain-and-distribution-network-b2c-b2b',
    categories: ['Agent-Based', 'Discrete Events'],
    content: `## Challenge

The client's business can be summarized as the transportation and management of fresh food from Distribution Centers (DC) to Fulfillment Centers (FC) as a B2B setup, and from the Fulfillment Center to final customers as a B2C setup, with the objective of providing fresh food to customers in less than one hour guaranteed.

There were considerable expansion requirements due to increasing demand, requiring the client to select new Distribution Centers and Fulfillment Centers in a particular city to cover that demand while maintaining the one-hour delivery guarantee. This also meant potential expansion to new cities and countries.

The client wanted a very flexible playground to define the positions of the different FCs and DCs, the location of potential customers, distribution strategies, demand distributions, demand regions, etc., and use that information to analyze consequences in terms of customer service, distribution costs, and resource utilization.

## Solution

For Supply Chain and distribution problems, AnyLogic is one of the best tools available with a powerful set of features such as GIS routing, easy configuration for flexible simulation models, easy save/load of complex scenarios on runtime, and a wide set of analysis tools.

![Simulation user interface on runtime](/images/portfolio/cases/a-supply-chain-and-distribution-network-b2c-b2b/simulation-ui.png)

A simulation model was developed that takes all the client's requirements into consideration with the possibility to manage Fulfillment Centers, Distribution Centers, and demand areas either before the simulation or during runtime. The client was able to change the structure of the network at any given point to see the impact of adding, editing, or removing an entity.

### KPI Analysis

All necessary analysis tools were added to allow the client to understand the implications of changes on key performance indicators (KPIs). These KPIs were visualized in chunks of 4 hours, 1 day, and 1 week to understand the short, mid, and long-term consequences of strategic decisions.

![4 hours vs 1 week KPI analysis](/images/portfolio/cases/a-supply-chain-and-distribution-network-b2c-b2b/kpi-analysis.png)

![Service level indicators](/images/portfolio/cases/a-supply-chain-and-distribution-network-b2c-b2b/service-level.png)

### Order Management Strategies

Some strategic decisions would change the dynamics of how a final customer is reached. Expert-system algorithms were used, which would change manually or automatically depending on the user decision.

![Order management strategies for the expert-system algorithm](/images/portfolio/cases/a-supply-chain-and-distribution-network-b2c-b2b/order-management.png)

## Outcome

The outcome is a fully functional software that allows for flexible decision making in a simulation setting, having a toolbox of strategies, parameter definitions, algorithm definitions, automation, and other flexible features. The user can easily visualize a full palette of graphical and text data showing all the dimensions of the business with clear information on KPI implications. The software was used to define real expansion decisions along with the best action plan for the expansion setting (leasing new locations, modifying delivery vehicles, segmenting delivery zones, improving fulfillment center processes, etc.).

## Project Features

- **Industry:** Supply Chain
- **Model:** Agent-Based + Discrete Events
- **Duration:** 2 months`,
  },
  {
    title: 'School Traffic Analysis',
    slug: 'school-traffic-analysis',
    categories: ['Road Traffic Library'],
    content: `## Challenge

The client, a school in Harare, Zimbabwe, was looking for a new location for school buildings. At one particular location, the concern was that dropping kids by car in the morning would cause chaos in the surrounding streets and problems with the neighborhood. The objective was to check through a simulation what the situation would really be and if it was possible to find a way for kids to be dropped without causing traffic problems.

## Solution

To solve this problem, the road traffic library of AnyLogic was used to build the network of roads associated with the school.

![Road traffic simulation of the school area](/images/portfolio/cases/school-traffic-analysis/traffic-simulation.png)

There were three points of arrival to the school, and it was unknown where the cars would come from, so several scenarios with different car arrival distributions were built. To understand surrounding traffic, a person counted the cars at each point of interest from 6:30am to 8am. This data was fed into the model, making experimentation possible.

## Outcome

The results clearly showed the chaos happening with traffic if students were allowed to come by car, and the initial suspicions from the school board were confirmed. Even though the idea of building the simulation was to try to prove that dropping students by car was feasible, the conclusion was that it was not. A simulation doesn't lie -- sometimes it's not possible to bend the truth to make things work as we want.

## Project Features

- **Industry:** Traffic
- **Model:** Road Traffic Library
- **Duration:** 2 weeks`,
  },
  {
    title: "Terrorism analysis on Trump's immigration policies",
    slug: '1118',
    categories: ['System Dynamics'],
    content: `## Challenge

After Trump's election in the United States in 2016, an immigration ban on different Muslim countries was conducted. This ban was predicted to have several social implications, particularly in terrorism. The purpose of this project was to understand the impact of Trump's policy banning 6 countries from the Middle East and Africa on terrorism actions executed in the US.

The idea was to generate a model that would represent on a macro perspective the impact of a policy that, while reducing the number of potential terrorists by reducing population and tightening immigration policies, also generates hate -- one of the main drivers for terrorist actions.

This is a very complicated social topic, but very well documented. The challenge was to use available information to understand causalities and measure at least qualitatively if terrorism attacks would increase, decrease, or remain the same.

## Solution

Based on existing documentation, the first step was to understand the main causalities leading to an increase in terrorism. A Causal Loop Diagram (CLD) was created showing the main drivers and feedback loops associated with terrorism.

![Terrorism attacks Causal Loop Diagram](/images/portfolio/cases/1118/terrorism-cld.png)

This CLD is a simplification of the complexity related to this topic but takes the most important factors into consideration. For instance, extremist ideologies, repression, external actors, and charismatic leaders are all summarized in the variable "hate towards U.S."

### Model Validation

The variable to measure is the number of attacks per year in the US. The model had to roughly replicate the data to be validated. The yearly attacks data was taken from the Global Terrorism Database (GTD).

![Yearly attacks in the US from the GTD](/images/portfolio/cases/1118/yearly-attacks.png)

The model shows that the attacks tend to stabilize around 37 attacks per year, which is roughly the same data from the GTD in 2015.

![Expected attacks shown by the model](/images/portfolio/cases/1118/attacks-outcome.png)

## Outcome

The results showed a 2% to 4% reduction of attack attempts in the US with Trump's policy in place. From the GTD data, since 2003 the percentage of successful attacks is 80%. So the number of attacks that would be stopped by Trump's policy in the next 5 years would be around six at most, and these don't necessarily have fatalities. Is this worth it in exchange for all the social, political, and economical stress?

## Project Features

- **Industry:** Government
- **Model:** System Dynamics
- **Duration:** 1 month`,
  },
  {
    title: 'Pricing segmentation for ride-sharing platform',
    slug: 'pricing-segmentation-for-ride-sharing-platform',
    categories: ['Discrete Events', 'GIS'],
    content: `## Challenge

The challenge was to simulate a ride-sharing platform for private car owners, which only has a mediating function as a place to "get together" -- the car owners who offer shared rides are private, as well as the people who look for a ride.

Three different scenarios had to be tested to understand customer satisfaction, user growth, and the possibility for users to move to a competing platform:

1. An initial situation (without fee)
2. A situation where the platform charges a fixed fee at a fixed time
3. A situation where the fee is introduced sequentially for different regional segments

Previous empirical research showed that price segmentation was the best long-term solution for the platform to succeed in Germany, and the simulation was a tool to confirm that.

## Solution

A simulation was built using a Discrete-Events model in AnyLogic, taking advantage of the GIS integration to improve visibility. Segmentations were made by region.

![Regional segmentation areas in Germany](/images/portfolio/cases/pricing-segmentation-for-ride-sharing-platform/segmentation-map.png)

Three scenarios were tested and the results needed to show a comparison between the platform and the competing platform, also showing the users who use both. The fixed price and segmented price scenarios were simulated and compared.

## Outcome

The hypothesis that segmented price would lead to better customer satisfaction and more significant user growth over time was confirmed by the simulation. This is an example where simulations can be used as a second measurement tool to prove a point with additional arguments.

## Project Features

- **Industry:** Applications
- **Model:** Discrete Events & GIS
- **Duration:** 1 month`,
  },
  {
    title: 'Coal Mining',
    slug: 'coal-mining',
    categories: ['Agent-Based'],
    content: `## Challenge

Seriti is a mining company in South Africa that uses continuous miners to fetch coal from underground mines using a particular configuration for the mining process. The mining strategy requires defining very particular road sizes to extract coal effectively. While continuous miners extract the coal, a number of shuttle cars collect and transfer it to a feeder breaker positioned strategically. Since there are more than 2 shuttles, a change-out point is defined to wait for other shuttles to position themselves in safe spots to avoid collisions.

![Coal mine configuration](/images/portfolio/cases/coal-mining/mine-configuration.png)

The mining strategy has been the same for a very long time and has never been tested to verify its efficiency. Experts have had the monopoly of knowledge to decide where to locate change-out points, the order of extraction, and the position of the feeder breaker. Since this process takes several weeks, it's virtually impossible to try new strategies in production -- this is where simulations play a significant role, allowing millions of tests to define an optimized strategy without cost. Saving days of work has a tremendous effect on costs and extraction rates.

## Solution

An Agent-Based model was built that was completely flexible on the configuration of roads, positioning of different actors, and could export all raw data to Excel. The model consisted of four different levels:

- Configuration of the system
- Simulation of the mining process using agents
- Engine to calculate optimal path planning to avoid collisions
- Data output and KPIs

The model also included definition of shifts, maintenance, breakdowns, downtimes, and resources.

## Outcome

The model allowed the company to determine a pseudo-optimal strategy to mine coal in order to reduce costs, movements, and resource utilization while maximizing extraction rate.

![Coal mining simulation 2D visualization](/images/portfolio/cases/coal-mining/mining-simulation.png)

The uniqueness of this project was the utilization of AnyLogic to configure very complex visualization patterns and generate collision-free movements using state-of-the-art algorithms. This approach gives the mining company freedom to generate new untested configurations without the cost of testing in production. It also helps in project planning since the model predicts the amount of time the project will take.

## Project Features

- **Industry:** Mining
- **Model:** Agent-Based
- **Duration:** 2.5 months`,
  },
  {
    title: 'Bus Depot - Diesel vs Electric',
    slug: 'bus-depot-diesel-vs-electric',
    categories: ['Discrete Events'],
    content: `## Challenge

The task was to simulate the internal operation of a planned Bus Depot under two different scenarios, each with different nuances in how they worked (number of buses, traffic distributions, fuel quantity). The first scenario was to develop the current situation with diesel buses arriving to the depot, filling their tanks, washing, and parking. The second scenario was to evaluate how electric buses affect the system.

The major questions to answer were:

- How long does the depot diesel tank last?
- Are the facilities able to handle 490 buses without too much waiting time?
- What is the impact on the diesel tank when electric buses are added?
- What is the financial impact of adding electric buses?

## Solution

A model was built in AnyLogic using discrete-events. A 3D model was developed and to simplify the problem while allowing clear visualization of fuel, the information was shown as yellow rectangles over the bus and a big yellow rectangle on the side of the pumps to clearly visualize the evolution of the diesel tank in time.

![3D Bus Depot Simulation](/images/portfolio/cases/bus-depot-diesel-vs-electric/bus-depot-3d.png)

## Outcome

The project was helpful to optimize the number of buses (electric and diesel) for best financial outcomes and to avoid massive queues. It was also discovered that the diesel tank was enough to cover all arriving buses. The model was used to support the purchasing of 50 new electric buses for Abu Dhabi town in the United Arab Emirates.

## Project Features

- **Industry:** Traffic
- **Model:** Discrete Events
- **Duration:** 2 weeks`,
  },
  {
    title: 'Management Investment',
    slug: 'management-investment',
    categories: ['Agent-Based'],
    content: `## Challenge

The problem was to generate a framework for investment on different opportunities related to companies based on their profit, carbon emission, payment of carbon fines, and other factors. Investors move from opportunity to opportunity using personal heuristics, and the objective was to see where investors end up investing based on all associated factors. The secondary academic objective was to compare AnyLogic, MESA, and NetLogo.

## Solution

A solution was generated in AnyLogic using Agent-Based modeling. The visualization was important to see how investors were moving through the investment space.

![Investors choosing a management investment option](/images/portfolio/cases/management-investment/investors-visualization.png)

The figure shows 25 investment opportunities with hundreds of investors making decisions. The investment opportunities evolve with time with new values that can make an investor move to that opportunity.

## Outcome

This project was an academic exercise to test and understand carbon-related investment theories and support theoretical research. The research also compared three simulation methodologies with the following conclusions:

- AnyLogic and NetLogo are equally easy to use for moderate-scale projects in the sustainability area
- Repast is a bit tougher
- AnyLogic looks much better with increased complexity

## Project Features

- **Industry:** Investment
- **Model:** Agent-Based
- **Duration:** 2 weeks`,
  },
  {
    title: 'Bridge Construction - Field Preparation',
    slug: 'bridge-construction-field-preparation',
    categories: ['Agent-Based', 'Discrete Events', 'Optimization', 'Parameter Variation', 'System Dynamics'],
    content: `## Challenge

The question to answer was how to model, analyze, and sustain the workflow and productivity of a construction system under dynamic constraints and hierarchical decision-making entities. The focus was analyzing the impact of simulation parameters on system effectiveness, taking into account real-time situations and giving insight to the project management team on the best control approach.

The objectives were to:
- Generate and optimize a construction schedule
- Revise and re-optimize the schedule during disruptions
- Offer a decision-making platform for the project team

The problem required consideration of the interactions and workflows of several working members (project manager, construction manager, operators, etc.), external influences (rain, road accidents), management techniques, and machine optimization.

## Solution

A multi-method simulation model was developed in AnyLogic:

- **Agent-Based modeling** captured the interactions between individuals for project initiation -- meetings, research, proposal construction, finding internal or external resources, etc.
- **Discrete-Events** simulated the field activities to clean, dig, fill, and prepare the terrain for bridge construction
- **System Dynamics** simulated the external influence of rain and bad weather on the field

The project also required construction of a full business process model, with training and support.

## Outcome

Under normal conditions, 2 bulldozers and 2 excavators per area were defined. But what if the manager says one is enough? A Monte Carlo experiment was developed to understand the risk of not meeting the deadline under different machine configurations. Weather was the most critical influence affecting project outcomes.

### Key Findings

- With only 1 team of machines per area: ~680 days to finish
- With 17 teams of 2 bulldozers and 2 excavators each: only 300 days
- Optimal target of finishing within 500 days led to this configuration:
  - **Number of bulldozers:** 2
  - **Number of excavators:** 2
  - **Areas per cluster:** 11 (equivalent to 3 teams)

The simulation serves as a tool usable in different terrains with different external influences as a project management tool to define the correct use of resources and work strategy.

## Project Features

- **Industry:** Construction
- **Model:** Discrete Events, Agent-Based, System Dynamics
- **Duration:** 1 year`,
  },
  {
    title: 'Speed Date',
    slug: 'speed-date',
    categories: ['Agent-Based', 'Discrete Events'],
    content: `## Challenge

The objective was to build a dashboard controlling a simulation that displays visually the process of speed dating in a facility with a certain amount of tables and a certain inflow of people. The idea was to understand the behavior of the system with a particular table setting and 1-on-1 dating strategies to improve the experience of the customers.

## Solution

The solution was built as a simulation in AnyLogic using a hybrid with Discrete-Events and Agent-Based. The client's objective was to collect data, with the visualization as a bird's eye view with lemmings style.

![Speed dating scenario with table layout](/images/portfolio/cases/speed-date/speed-date-scenario.png)

The simulation was based on the tables where 1-on-1 dates are being held with different strategies for rotating participants.

## Outcome

The outcome was an easy-to-use software to test different scenarios, save scenarios, load scenarios, etc., in order to collect data on this dating room. The rest of the analysis was done by the client using Excel exports for further investigation.

## Project Features

- **Industry:** Entertainment
- **Model:** Discrete Events, Agent-Based
- **Duration:** 2 weeks`,
  },
  {
    title: 'Cars and Pipes - Effect of water problems on road traffic',
    slug: 'cars-and-pipes-effect-of-water-problems-on-road-traffic',
    categories: ['Agent-Based', 'Fluid Library', 'Road Traffic Library'],
    content: `## Challenge

In some cities, the water consumed in homes is transported through pipes from reservoirs and stored in different tanks to redistribute to neighborhoods. These pipes are present below streets where vehicle traffic flows. If a road has problems and requires fixing, it affects the pipes below, requiring redistribution of water through different pipes. Conversely, a pipe or tank problem can severely affect road traffic, generating congestions and reroutings.

The project's objective was to analyze where the most breakdowns occur, if breakdowns occur at multiple locations at the same time, and the implications on traffic and water supply.

## Solution

A model was built in AnyLogic using the fluid library and the road traffic library along with Agent-Based. This hybrid model allowed visualization of the state of the network in time with congestion information, breakdown information, and fixing timings.

![Network state visualization showing congestion and breakdowns](/images/portfolio/cases/cars-and-pipes-effect-of-water-problems-on-road-traffic/network-state.png)

## Outcome

The outcome was a ready-to-use software allowing the user to play around with the model to understand statistical elements with different inputs such as failures, traffic, water demand and supply, alternative routes, etc. The model was used as an initial initiative to start working on strategies to reduce water supply gaps and traffic congestions through better communication, faster arrival to problem areas, and faster problem fixing.

## Project Features

- **Industry:** Road Traffic
- **Model:** Discrete Events, Agent-Based
- **Duration:** 1 month`,
  },
  {
    title: 'Employees Entering an Office',
    slug: 'employees-entering-an-office',
    categories: ['Discrete Events'],
    content: `## Challenge

The challenge was to build a very flexible model where different office layouts could be designed and added to test the behavior for people entering the office common space and sitting at either a hot desk, shared table, or casual seating.

The difficulty was to build one unique model that could fit any office layout.

## Solution

The solution was built using AnyLogic with discrete-events for employee movement. The user could choose in an initial screen what office layout to use and run the simulation with it. It was also possible, following a set of instructions, to build a new office layout in a flexible area for a limitless amount of reorganizations.

![Multiple office layout options](/images/portfolio/cases/employees-entering-an-office/office-layouts.png)

## Outcome

The project was a playground to sell different office ideas to companies, proving the best distribution of office positions to optimize occupancy in the open office concept. This can be used for existing offices, co-working spaces, or any kind of open office structure.

## Project Features

- **Industry:** Office
- **Model:** Discrete Events
- **Duration:** 1 month`,
  },
  {
    title: 'Newspaper Production',
    slug: 'newspaper-production',
    categories: ['Discrete Events'],
    content: `## Challenge

When a project is clear, it can be done extremely fast. The knowledge of the production facility was so good that it was a matter of implementing without delays. The project aimed to build a newspaper manufacturing facility simulation. The papers were produced in 1 to 4 machines operating at all hours, transported by forklifts, and loaded to trucks for shipment. The idea was to understand the current state and define strategic elements to minimize truck waiting time for deliveries.

## Solution

The solution was a discrete-events model built in AnyLogic with statistics outputs, Excel exports, and production status information.

![Newspaper production simulation](/images/portfolio/cases/newspaper-production/newspaper-simulation.png)

The aim was to illustrate the time schedule from collecting manufactured products from a machine to loading for delivery. The following questions were clarified:

- How many products should be stored when a production run first passes through before being transferred to an intermediate storage area?
- How does loading change if multiple forklifts are used?
- How long is the waiting time of vehicles before loading, and how long does loading take?

## Outcome

This project was presented to high management as a demo to pursue additional projects. No process improvement was necessary and no new strategies were requested.

## Project Features

- **Industry:** Manufacturing
- **Model:** Discrete Events
- **Duration:** 2 weeks`,
  },
  {
    title: 'Warehouses complex for canned food products',
    slug: 'warehouses-complex-for-canned-food-products',
    categories: ['Discrete Events'],
    content: `## Challenge

The model consists of a complex of warehouses for various canned food products sold to different retail chains. Once an order is placed, a forklift driver or collector walks through the warehouse and collects the products. The complex includes four warehouses with no racks.

The company wanted to optimize the picking time for forklifts and collectors while maintaining the same amount of resources -- no additional spending.

## Solution

The problem is a classical situation where products are not arranged appropriately, meaning high-frequency products are not placed close to collectors and forklifts. The solution was to develop a simulation model to test different product arrangements and find the optimal one leading to reduced picking time.

![Warehouse layout and product arrangement](/images/portfolio/cases/warehouses-complex-for-canned-food-products/warehouse-layout.png)

![Warehouse simulation in operation](/images/portfolio/cases/warehouses-complex-for-canned-food-products/warehouse-simulation.png)

## Outcome

The simulation resulted in faster picking times overall, leading to a redistribution of the pallets around the warehouse.

## Project Features

- **Industry:** Food
- **Model:** Discrete Events
- **Duration:** 2 weeks`,
  },
  {
    title: 'Cash IOT Movement',
    slug: 'cash-iot',
    categories: ['Discrete Events'],
    content: `## Challenge

Armored couriers are employed by companies to safely transport valuable items such as cash. In this project, the transfer occurs between retailers and their banks. The objective was to understand the operational behavior of the armored transport service provider and compare between the current state and a future state that employs technology such as RFID tags on cash bags and a robot for sorting.

## Solution

A discrete-events simulation model was built in AnyLogic covering several processes:

- **Retailer processes:** collecting or dropping cash bags, barcode scanning, paperwork, transfer of custody
- **Bank processes:** collecting or dropping cash bags, withdrawing cash from ATMs and refilling them, paperwork, transfer of custody
- **Courier branch arrival:** arriving cash storage, bag inspection, tagging, sorting, and preparation for next-day pick-up
- **Courier branch morning operations:** bag inspection, manifest checking, custody transfer, loading to the truck
- **Truck movement:** between retailers, banks, and courier branch

![Cash movement process simulation](/images/portfolio/cases/cash-iot/cash-process.png)

A future state was also incorporated with improvements proposed by the client for comparison between current and future state.

## Outcome

The model provided detailed breakdown of all needed time durations and resource utilizations in both states. This allowed complete analysis of system performance and helped the client prove initial assumptions of reduced staffing requirements, improved efficiency, reduced long-term cost, and increased capacity in the future state.

## Project Features

- **Industry:** Armored Transport & IOT
- **Model:** Discrete Events
- **Duration:** 1 month`,
  },
  {
    title: 'Nunavik Ecosystem',
    slug: 'nunavik-ecosystem',
    categories: ['Agent-Based'],
    content: `## Challenge

Nunavik is a remote area in Canada facing unique food security challenges. Residents rely heavily on fishing for daily food needs. As a source of economic growth, Nunavik is developing commercial fisheries. Industrial fishing is thought to affect the ecosystem via changing the biomass of species. The objective was to understand the impacts of these fisheries on local communities dependent on fishing for food.

## Solution

A simulation model was built in AnyLogic using an agent-based approach to mimic the daily subsistence activities of Nunavik residents.

![Nunavik ecosystem model](/images/portfolio/cases/nunavik-ecosystem/ecosystem-model.png)

The community is divided into households, and each household needs to sustain necessary food for its members through several means:

- Fishing (in households that have a person who can fish)
- Buying from the market
- Asking for food from relatives
- Getting food from a community freezer

![Household food security model](/images/portfolio/cases/nunavik-ecosystem/household-model.png)

The income for each household is taken into consideration. The effect of industrial fisheries on fish biomass is taken from another software called Ecosim and applied in the model. This way, the simulation shows how changes in biomass directly affect household capabilities of securing daily food necessities.

## Outcome

Through providing the user with the capability of changing all input parameters via an Excel sheet, many scenarios were investigated. The model showed the percentage of households that were food insecure at the end of a year when taking into consideration the changing biomass due to commercial fisheries.

These results helped set guidelines for efforts that should be put forward by authorities and the community to reduce negative effects on food security.

## Project Features

- **Industry:** Fishing
- **Model:** Agent-Based
- **Duration:** 1 week`,
  },
  {
    title: 'Online Grocery Shopping',
    slug: 'online-grocery-shopping',
    categories: ['Discrete Events', 'Optimization'],
    content: `## Challenge

In an online grocery shopping application, people order groceries online and pickers go to the shopping center to pick up the requested items and drive them to the customer's house. The project focused only on operations inside the shopping center. The main objective was to optimize the routing and picking methods of items.

## Solution

A simulation model was built in AnyLogic using discrete-events. Real data of past orders and the store layout were used to validate the model, with output validation done using Python. The optimization used the concept of genetic algorithms.

![Routing generated by the genetic algorithm](/images/portfolio/cases/online-grocery-shopping/routing-algorithm.png)

### Optimization Concepts Tested

In addition to the single order optimization, two other concepts were tested:

- **Batching optimization:** Batches of orders are collected before picking, so the picker picks several orders at the same time in one store visit
- **Zoning optimization:** The store layout is divided into zones, with items picked per zone. Optimization is done on 2 levels: optimizing item picking order within a zone and optimizing the order of zones

Finally, a combination of both concepts was tested.

Part of the work also involved data cleaning, analysis, and input calibration, as the real data had many problems. All optimization analysis was conducted using Python.

## Outcome

The analysis showed that the mixed method between batching and zoning leads to the minimum mean picking time per item. The model itself can also be used as a testing tool to optimize future orders and find the best picking route.

## Project Features

- **Industry:** Commercial
- **Model:** Discrete Events
- **Duration:** 2 weeks`,
  },
  {
    title: 'Epidemics Education - Systems Thinking',
    slug: 'epidemics',
    categories: ['Agent-Based'],
    content: `## Challenge

This project was part of a research study conducted at the University of Technology and Applied Sciences in Muscat and the University of Sydney. Previous studies found that medical students face difficulties grasping certain epidemiology concepts. The aim was to build agent-based models to help undergraduate students understand systems concepts and explore the nature and behavior of various diseases.

## Solution

Six agent-based models were prepared for students to explore:

### SEIRS Model

A typical model used in epidemiology to understand how a new unknown disease spreads and how long it would take to end. The letters stand for susceptible, exposed, infected, recovered, and susceptible again.

![SEIRS epidemiological model](/images/portfolio/cases/epidemics/seirs-model.png)

### Forest Fire Model

Shows how a fire spreads through a forest with trees.

![Forest fire model](/images/portfolio/cases/epidemics/forest-fire.png)

### Malaria Model

Shows the behavior of a known disease with factors such as hospitalization and prevention policies (mosquito repellents and nets).

![Malaria model](/images/portfolio/cases/epidemics/malaria-model.png)

### Marketing Model

Studies the effect of marketing campaigns such as advertisements on product sales.

![Marketing model](/images/portfolio/cases/epidemics/marketing-model.png)

### Covid-19 Model

Helps study the spread of covid with sociability factors and prevention policies such as masks, quarantine, and vaccination.

![Covid-19 model](/images/portfolio/cases/epidemics/covid-model.png)

### Predator-Prey Model

Studies the dynamics between interacting species in an ecosystem -- wolves and sheep in this case.

![Predator-prey model](/images/portfolio/cases/epidemics/predator-prey.png)

### Systems Concepts Conveyed

Each pair of models was designed to convey specific dynamic concepts:

- **SEIRS and fire:** Emergence
- **Malaria and marketing:** Tipping point and Resilience
- **Covid and predator-prey:** Dynamic equilibrium

## Outcome

These models were used in an experiment on students to help learn complex systems ideas relevant to understanding epidemics. The study proved that this instructional approach could help students achieve deeper understanding and greater performance on declarative and explanatory knowledge about epidemic diseases, as well as transfer of such knowledge to new, previously unexposed problems.

## Project Features

- **Industry:** Education and Epidemics
- **Model:** Agent-Based
- **Duration:** 1 month`,
  },
  {
    title: 'Material Flow - Safety First',
    slug: 'material_flow_safety',
    categories: ['Discrete Events', 'Material Handling Library'],
    content: `## Challenge

This project is related to operations in a set of warehouses. The focus was on the movement of people and equipment: forklifts, pallet jacks, and AGVs responsible for moving materials, plus trucks transporting materials to the warehouse. In addition to normal flow of people, there are production lines where operations are concentrated. The client was concerned with personnel safety, so the main objective was to define the most critical areas of intersection between people and equipment, and understand bottleneck locations where congestion might occur.

## Solution

A simulation model was built in AnyLogic using discrete-events. Architectural drawings were used to prepare the layout using wall elements and nodes to represent rooms and work areas. Both the material handling library and the pedestrian library were used.

![Warehouse layout with safety zones](/images/portfolio/cases/material_flow_safety/warehouse-layout.png)

### Key Technical Challenges

One challenge was that equipment movement had to be free (no specific paths) but certain locations needed to be avoided by each equipment type. This was solved by using free space movement with additional walls and restricted nodes to guide transporters without using path-guided movement.

### Safety Zone Analysis

To specify zones of safety concern, the warehouse area was divided into small zones (meshes) and raw information about the passage of people and equipment through areas of interest was exported. The client also requested the ability to define these areas dynamically through an Excel sheet instead of defining them as nodes in the model.

## Outcome

The client was able to identify critical safety areas and propose modifications to warehouse layouts to reduce both safety and congestion problems.

## Project Features

- **Industry:** Manufacturing, Safety
- **Model:** Discrete Events
- **Duration:** 3 months`,
  },
  {
    title: 'Warehouse Inbound Logistics',
    slug: 'warehouse-inbound-logistics',
    categories: ['Discrete Events'],
    content: `## Challenge

For this project, we collaborated with a global logistics company specializing in supply chain management, freight transportation, and warehousing solutions across air, land, and sea. They sought to develop a simulation model in AnyLogic to analyze the efficiency of human resources in their inbound warehouse operations.

## Solution

The simulation model served two primary purposes: first, as a communication tool to visualize resource utilization through data, and second, as an experimentation platform to assess the impact of system input changes on key operational KPIs.

The model represented the inbound warehouse operations from the arrival of trucks with pallets to the storage of pallets in designated put-away locations. The operations included:

- Inbound administrative work
- Unloading using forklifts
- Sorting
- First article inspection
- Material requirements planning

![Inbound warehouse simulation model](/images/portfolio/cases/warehouse-inbound-logistics/inbound-simulation.png)

### Pallet Types

Within this process, three pallet types exist, each following a distinct subprocess:

- Mono-Pallets GS1
- Mono-Pallets non-GS1
- Mixed Pallets

## Outcome

All operational parameters (labeling time, breakbulk time, etc.) were configurable in an Excel file representing a specific scenario. The simulation model featured three views:

- **Animation:** Operations in 2D and 3D
- **Internal Logic:** The model's processing logic
- **Statistics:** Utilization, working hours, put-away information, and costs

Special attention was given to optimizing simulation speed using lightweight AnyLogic tools, ensuring compatibility with potential future optimization experiments.

## Project Features

- **Industry:** Warehouse, Logistics
- **Model:** Discrete Events
- **Duration:** 1 month`,
  },
  {
    title: 'Smart Mining Operations -- AI powered swarm robotics',
    slug: 'swarm-mining-robots',
    categories: ['Discrete Events', 'Fluid Library', 'Material Handling Library'],
    content: `## Challenge

This project represented mining operations conducted by AI-powered swarm robotic systems with three types of robots:

- **Excavators:** Robots with two arms (chisel or saw configurations). An excavator with a chisel and a saw can operate independently; other configurations require teamwork.
- **Collectors:** Two configurations -- either they carry ore themselves (acting as collectors and haulers), or they team up with a separate hauler.
- **Surveyors:** Used for mapping purposes, with operational decisions based on distance to other robots and scanning frequency.

The challenge was to study the operational behavior of these robots for a given layout and understand how different setups impact performance metrics. The mine layout configuration also plays an important role in the coordination strategy.

Additionally, conventional equipment (loaders and haulers) is used to transport material from underground stockpiles up to a processing circuit.

## Solution

A model was built in AnyLogic using the material handling library, the fluid library, and nearly 30 different agents for the full model architecture.

### Automatic Layout Generation

One of the most important features was building the mine layout automatically, as the swarming strategy would change depending on the configuration of stopes, corridors, and movement space. The layout was built entirely in an Excel file that AnyLogic reads to construct the mine configuration before simulation start.

### Expert System for Robot Coordination

As this was the first step toward smarter swarming behavior with AI, an expert system with behavioral rules was built for the team work strategy. This was integrated with AnyLogic's material handling library obstacle avoidance, achieving performance results similar to what would be expected with AI.

![Robot configurations: chisel+saw excavator with collector-hauler (left) vs team of two excavators with separate collector and hauler (right)](/images/portfolio/cases/swarm-mining-robots/robot-config-1.png)

![Swarm mining simulation in action](/images/portfolio/cases/swarm-mining-robots/robot-config-2.png)

## Outcome

The simulation was used to understand the performance of different robot combinations for different layouts, which was very relevant as the operational results were unknown and unknowable without simulation. As some robots didn't even exist yet, it was also used to determine what robots to build first, as some combinations proved to work better with certain robot types.

## Project Features

- **Industry:** Mining, Robotics
- **Model:** Discrete Events
- **Duration:** 1 month`,
  },
  {
    title: 'Biological Organisms Throughput',
    slug: 'biological-organisms-throughput',
    categories: ['Agent-Based', 'System Dynamics'],
    content: `## Challenge

This company cultivates biological organisms in a series of interconnected ponds. As organisms grow, they require more space, necessitating transfer to larger ponds with increased water capacity. Transfer can be facilitated in two ways:

- **Naturally:** Allowing water and organisms to flow via gravity
- **Mechanically:** Using pumps (faster but results in some organism loss)

Since organisms grow over an extended period, they transition through a sequence of progressively larger ponds.

![Pond system overview](/images/portfolio/cases/biological-organisms-throughput/pond-system.png)

Additionally, ponds require frequent cleaning and some may become unusable due to failure, requiring the transfer sequence to be adjusted. The challenge is to understand what sequence and technology to use to maximize throughput.

## Solution

As this project requires considerable configuration options, we developed a model in AnyLogic with an Excel input file to generate scenarios. Each scenario requires dynamic concepts for each pond that are very different and are subjected to physical equations based on gravity or pump capabilities.

### Hybrid Modeling Approach

We developed a hybrid model using a combination of agent-based and system dynamics.

![System dynamics model for pond interactions](/images/portfolio/cases/biological-organisms-throughput/system-dynamics.png)

For validation purposes, we developed 3D and 2D versions of the ponds connected through the system dynamics information. The following shows how density changes in each pond, where red color signifies a density of organisms reaching a critical threshold (which generally must be avoided as it blocks or slows organism growth).

![Pond density visualization with critical thresholds](/images/portfolio/cases/biological-organisms-throughput/pond-density.png)

## Results

As this project cannot be disclosed in detail, it's relevant to state that the raw information from the process was exported from AnyLogic, and we developed a comprehensive dashboard using PowerBI to display comparisons between different scenarios.

![PowerBI dashboard comparing scenarios](/images/portfolio/cases/biological-organisms-throughput/powerbi-dashboard.png)

Each scenario displays results that are easily comparable for operation and strategic purposes, but also to communicate decisions to stakeholders.

## Project Features

- **Industry:** Biology
- **Model:** Agent-Based, System Dynamics`,
  },
  {
    title: 'Military Gym Layout Optimization',
    slug: 'military-gym-layout-optimization',
    categories: ['Optimization', 'Pedestrian'],
    content: `## Challenge

This project focused on analyzing people flow inside a gym facility to compare two different layouts and identify bottlenecks impacting movement efficiency and transition delays between areas. The facility accommodates groups of 150 to 200 people who transition through four workout zones to complete a routine before exiting.

Understanding how different layouts influence flow efficiency was critical for determining the best design for minimizing delays. The key challenge was identifying congestion points and evaluating throughput based on movement patterns.

## Solution

A simulation model was built in AnyLogic to represent the gym facility in 2D. The Pedestrian Library captured individual movement dynamics and interactions with obstacles and other people.

![Gym layout simulation - Layout A](/images/portfolio/cases/military-gym-layout-optimization/gym-layout-1.jpg)

![Gym layout simulation - Layout B](/images/portfolio/cases/military-gym-layout-optimization/gym-layout-2.jpg)

The model was built flexibly so the user can control input parameters (number of people, time at each station, movement speed, layout selection) from an Excel sheet, with enough flexibility to incorporate additional layouts for testing.

### Throughput Analysis

To obtain throughput, we measured how much time it takes for each individual to move from their initial position in one zone to the final position in the next zone. Information was exported on an individual level for population analysis.

![Throughput analysis results](/images/portfolio/cases/military-gym-layout-optimization/throughput-analysis.png)

### Bottleneck Analysis

To find bottlenecks, we generated a set of uniformly distributed squares in the layout. Each time step, we calculated the density in the squares and the time individuals spend in each square. A square with high density or prolonged time is a potential bottleneck.

![Bottleneck density analysis](/images/portfolio/cases/military-gym-layout-optimization/bottleneck-analysis.png)

## Results

The raw data exported from the model was used to generate different dashboards in Power BI.

![Power BI dashboard - overview](/images/portfolio/cases/military-gym-layout-optimization/dashboard-1.png)

![Power BI dashboard - detailed analysis](/images/portfolio/cases/military-gym-layout-optimization/dashboard-2.png)

The client was able to test layout variations and make data-backed decisions before implementing physical changes, leading to a more efficient and user-friendly environment.

## Project Features

- **Industry:** Military, Fitness
- **Model:** Pedestrian, Optimization`,
  },
  {
    title: 'Bulk Material Transport Rail System',
    slug: 'bulk-material-transport-rail-system',
    categories: ['Discrete Events'],
    content: `## Challenge

The project involved analyzing transport operations of a single-track railway corridor used for bulk material transportation. The railway operates with a centralized control system and includes multiple passing loops for trains traveling in opposite directions.

Each train consists of a set number of wagons carrying thousands of tons of material. The corridor handled several loaded trains per day, with a full cycle time of over two days. The objective was to assess the railway's capacity to accommodate additional trains while ensuring smooth operations and avoiding collisions.

The main challenge was increasing throughput while maintaining safe and efficient train movements on a single-track system with delays at passing loops and limited data on existing control mechanisms.

## Solution

A simulation model was developed using AnyLogic's Rail Library and Process Modeling Library.

### Railway Layout & Track Infrastructure

The available information regarding rail layout was only geolocations of points along the rail and loops. GPS points were used to prepare a shape file using Python, which was then imported to AnyLogic and converted into a railyard.

![Railway layout in AnyLogic](/images/portfolio/cases/bulk-material-transport-rail-system/rail-layout.png)

### Train Movement & Collision Avoidance

The rail library in AnyLogic detects collisions, but it is the modeler's responsibility to build the avoidance process. Passing loops allow trains to wait for trains coming in the opposite direction. We created a simplified algorithm that behaves as a pseudo-optimal solution.

Several factors were considered: train length, average speed per direction, loading/unloading times, maximum capacity at rail ends, and failure incidents based on custom distributions from real data.

### Visualization

Since the rail is very long and difficult to visualize at appropriate scale during model run, we devised a visualization scheme for easily identifying train movement along the rail, essential for model validation.

![Train visualization scheme](/images/portfolio/cases/bulk-material-transport-rail-system/visualization-scheme.png)

## Results

The simulation provided key insights into trade-offs between cycle time, congestion, and throughput.

### Optimal Train Count

The system could support significantly higher numbers of trains per day without collisions. The mean cycle time increases as more trains are used, with a collapse at a certain threshold showing a rough increase in slope.

![Mean cycle time vs number of trains](/images/portfolio/cases/bulk-material-transport-rail-system/cycle-time.png)

The total number of loaded trains that entered the system (throughput) during simulation shows the same trend -- beyond a certain number, adding more trains is not worth it.

![Throughput analysis](/images/portfolio/cases/bulk-material-transport-rail-system/throughput.png)

### Bottleneck Identification

The primary limiting factor was the available space for unloading. At the threshold number of trains, the unloading side reaches its limit, indicating a bottleneck.

![Bottleneck at unloading side](/images/portfolio/cases/bulk-material-transport-rail-system/bottleneck.png)

The railway operator gained valuable data-driven recommendations for improving infrastructure planning and throughput optimization.

## Project Features

- **Industry:** Rail, Mining
- **Model:** Discrete Events
- **Duration:** 2 months`,
  },
  {
    title: 'Used Cooking Oil Recycling',
    slug: 'used-cooking-oil-recycling',
    categories: ['Fluid Library'],
    content: `## Challenge

This project involved the operations of a facility specializing in used cooking oil (UCO) recycling. The facility processes UCO collected from food service establishments and refines it into recycled vegetable oil while managing byproducts like fats, solids, and waste water.

The objective was to develop a proof of concept model to test the current schedule of trucks arriving to unload raw UCO, trucks transporting settled water to waste water treatment plants, and tanker trailers transporting processed oil to clients.

The facility's operations include multiple processing stages: filtration of solids, settling of oil and water, heating and separation of fats, and centrifugation for final purification. Each stage has different processing times, tank capacities, and operational constraints.

## Solution

A simulation model was built in AnyLogic to replicate the entire facility's UCO recycling process using the fluid library. The process modeling library simulated truck arrival, loading, and unloading processes.

![UCO recycling facility process simulation](/images/portfolio/cases/used-cooking-oil-recycling/facility-process.png)

The model accounted for key operational elements:

- **Vacuum trucks arrival and unloading:** Studying waiting times at unloading stations
- **Filtration & settling:** Flow through filtration and settling tanks for optimal processing rates
- **Fat heating and centrifugation:** Separation of oil, water, and solids with processing time analysis
- **Tanker trailer loading:** Studying waiting times at loading stations and tank storage capacities

![Simulation model detail](/images/portfolio/cases/used-cooking-oil-recycling/simulation-model.png)

Operational parameters were dynamically configured using an Excel-based input system for rapid experimentation.

## Results

For each scenario, the user could export information related to tanks and trucks:

**Truck data:**
- Arrival time
- Truck type
- Load utilization
- Departure time

**Tank data (exported at truck departure):**
- Amount of fluid in tank
- Timestamp

This project is a small example of something that can be done quickly to gain visibility, trust, or funding for a larger project.

## Project Features

- **Industry:** Recycling, Oil Processing
- **Model:** Fluid Library
- **Duration:** 2 weeks`,
  },
  {
    title: 'Production Facility Planning',
    slug: 'production-facility-planning',
    categories: ['Discrete Events'],
    content: `## Challenge

This project involved a production facility still in the planning phase and under construction. The focus was developing a digital twin to analyze production, logistics, and warehouse operations over a long-term planning horizon. The goal was to evaluate machine commissioning schedules, material flow, and production throughput while ensuring efficient intra-logistics and resource utilization.

A key challenge was determining the optimal timing for machinery deployment -- whether earlier, later, or as originally planned -- to balance capacity, demand, and operational efficiency.

Raw materials arrive and are stored in storage areas. Sales are estimated with around a 20-year look-ahead distributed monthly according to seasonality ratios. Several production lines are set to be commissioned at specific dates. Production is always done in lot sizes, with raw materials moved using specific transportation vehicles.

## Solution

A simulation model was developed using AnyLogic's Process Modeling Library with a 2D layout representing the true facility layout.

![Production facility 2D layout](/images/portfolio/cases/production-facility-planning/facility-layout.png)

### Comprehensive Input Configuration

All information was configurable from an Excel sheet including:

- Estimated sales per year for each product type with seasonality ratios per month
- Production lot sizes for each product type
- Container capacity for each product type
- Machine commissioning dates and utilization percentage for breakdowns
- Raw materials composition for each product type
- Process production steps with cycle times at each step
- Setup times between different production types
- Transportation vehicle details (count, speed, loading/unloading durations)

### Flexible Process Recipes

For greater flexibility, production steps were read from the Excel sheet and converted into a recipe in the model for each product type.

### Data Export

Raw data exported from the model included:
- Vehicle movement information (initial location, destination, time, number of transported materials)
- Product processing steps (name, start and end times)
- Storage information (location, arrival and departure times)
- Production orders (order ID, waiting times for available production lines)

## Results

By leveraging digital twin technology, the company gained a powerful tool for long-term strategic planning, specifically for:

- **Production scheduling:** Simulating the impact of different machine commissioning dates on output and efficiency
- **Material flow analysis:** Tracking inbound deliveries, storage requirements, and movement between processing stages

## Project Features

- **Industry:** Manufacturing
- **Model:** Discrete Events
- **Duration:** 3 months`,
  },
  {
    title: 'Delivery Optimization',
    slug: 'delivery-optimization',
    categories: ['Agent-Based', 'Discrete Events', 'GIS', 'Optimization'],
    content: `## Challenge

This project is related to the operation of delivery vehicles within a geographical area. Vehicles with specific characteristics (capacity, speed) are stationed at various base stations and transport materials from retail stores to customers' locations. Orders coming from upstream need to be batched and assigned to a vehicle, with constraints like maximum transit time and storage temperature.

The primary purpose of the simulation was to develop and collect information to be sent to an external algorithm responsible for optimizing order assignment to vehicles.

## Solution

A simulation model was built using AnyLogic with GIS maps for locating stations, stores, and routes. The Process Modeling library combined with state charts handled order generation and vehicle movement.

### Input Configuration

Parameters defined via Excel included:
- Geolocations of stations, stores, and customers
- Vehicle capacity, speed, and transportable material types
- Order arrival rates at different times of day
- Order types including size and criticality details

### External Algorithm Integration

At the beginning of the model, all vehicles start at base stations. Orders are generated based on specified rates. If a pickup location isn't specified, the closest facility is chosen based on accessible routes and order type.

All order characteristics, locations, properties, and vehicle statuses are sent to the external algorithm via HTTP:

1. Set up an HTTP client
2. Convert data to JSON
3. Create and send a POST request
4. Receive the optimized assignment response

Each time new orders are generated, a new request with updated vehicle positions and order information is sent for re-optimization. Orders already delivered are excluded from new solutions.

### Data Export

Exported data included:
- All order characteristics, assigned vehicles, and statuses
- Request and response times for each server round
- Vehicle activity information (pickup and drop-off times)

## Results

In addition to providing information to the external algorithm for optimization, the simulation provided valuable analysis data for delivery durations, vehicle utilization, and the percentage of rejected orders due to unavailability or constraint violations.

## Project Features

- **Industry:** Logistics, Delivery
- **Model:** Agent-Based, Discrete Events, GIS, Optimization
- **Duration:** 2 months`,
  },
  {
    title: 'Train Sequences in Railyard',
    slug: 'train-sequences-in-railyard',
    categories: ['Railyard Library'],
    content: `## Challenge

A railyard plays a critical role as a central hub where trains are assembled, maintained, and routed to various destinations. Efficient operation is essential for maintaining flow, ensuring on-time deliveries, and avoiding bottlenecks.

In a typical railyard, there can be numerous parallel tracks (up to 20) that interconnect at various points. Each train may follow a different sequence, creating complex routing challenges. The simulation must be flexible and standardized, allowing any route to be defined dynamically.

Key performance metrics include:
- Total route time for each train
- Time a train spends blocked by another
- Delays caused by shift changes
- Time spent on maintenance processes (locomotive washing, upkeep)

## Solution

The simulation evaluates the potential benefits of adding parallel tracks to alleviate congestion, minimize deadlock risk, and enhance flow. Rather than modeling each individual track, train routes are defined in an Excel-like "recipe" format for easy modifications.

![Railyard simulation overview](/images/portfolio/cases/train-sequences-in-railyard/railyard-overview.png)

The simulation is built using AnyLogic's discrete event capabilities with the Process Modeling and Rail Libraries.

### Model Architecture

The model features four key agents:

- **Layout:** Represents the logical blocks of the railyard and handles 2D animation
- **Locomotive:** Represents individual locomotives
- **RailCar:** The cars that each locomotive can transport
- **Train:** A composite of a locomotive and its attached railcars

![Railyard detail view](/images/portfolio/cases/train-sequences-in-railyard/railyard-detail.png)

This structure ensures the model is both scalable and adaptable, capable of simulating various train configurations and operational scenarios.

## Results

Bottlenecks and train blockages were identified in specific segments, providing valuable insights into operational constraints. However, detailed analysis revealed that while critical situations occurred, they were isolated incidents rather than systemic inefficiencies. The cost-benefit assessment indicated that disruptions were not significant enough to justify investment in additional parallel tracks.

![Railyard results and analysis](/images/portfolio/cases/train-sequences-in-railyard/railyard-results.png)

Results were deployed in a spreadsheet showing train ID, origin and destination track, start and end times, and whether the train was interrupted or blocked.

## Project Features

- **Industry:** Rail
- **Model:** Railyard Library
- **Duration:** 2 months`,
  },
  {
    title: 'Multi-Robot Navigation with Collision Detection',
    slug: 'multi-robot-navigation',
    categories: ['Agent-Based'],
    content: `## Challenge

This project presents a flexible and dynamic simulation environment designed as a Digital Twin of a real-world multi-robot navigation system. Built using AnyLogic, the model allows real-time interaction with external clients and servers, supports dynamic configuration of maps and robot properties via JSON files, and simulates realistic behaviors such as obstacle detection, task execution, and robot coordination.

In systems involving multiple autonomous robots navigating shared environments, collisions can lead to significant operational disruptions. Clients require a testing platform to validate navigation and task assignment algorithms without the cost or risk of live experimentation.

## Solution

Using AnyLogic as both a client and server, the simulation mimics real-time behavior of a robot fleet within a configurable map. Each robot is an agent acting as both a local server (receiving tasks) and a client (sending status updates) through Java HTTP servers.

### Main Capabilities

- Fully dynamic map and robot configuration using JSON files, allowing testing on multiple maps without changing AnyLogic
- Real-time communication with external APIs to receive motion plans and return robot states
- Obstacle avoidance using Safety Zones and spatial quadrant logic
- Visual and logical representation of nodes, links, robots, and restricted areas
- Task execution validation through simulated collisions, obstacle detection, and battery tracking

![Robot navigation map with nodes and links](/images/portfolio/cases/multi-robot-navigation/robot-map.png)

### Simulation Architecture

- **Agent-Based paradigm:** The map, robots, and static obstacles are modeled as agents
- **Map generation:** Dynamically built from JSON input describing nodes, links, obstacles, and special zones
- **Robot profiles:** Separate JSON file with dimensions, server port, battery level, speed, rotation speed, and configurable safety zones

### Client-Server Interaction

- **Robot as Server:** Each robot opens a local server to receive task instructions from an external API
- **Robot as Client:** Each robot reports its position and battery level to the external decision-making server

### Collision Handling

- **Quadrant System:** The environment is divided into spatial quadrants to reduce computational load -- only adjacent quadrants are checked during movement
- **Safety Zones:** Multiple configurable zones extending from each robot body. If an obstacle enters a safety zone, the robot reduces speed. On body contact, the robot stops and flags the task as failed

![Safety zones visualization for validation](/images/portfolio/cases/multi-robot-navigation/safety-zones.jpg)

## Results

This simulation operates in real time and is used to:

- Visually verify robot behavior when given motion plans
- Identify potential collisions and evaluate plan viability
- Serve as a testbed for external algorithms, enabling debugging and risk-free iteration

### Key Benefits

- **Risk mitigation:** Test behaviors in a safe virtual environment before deploying physical robots
- **Flexibility:** Fully customizable maps, robot types, and simulation rules
- **Real-time feedback:** Continuous communication with external systems enables dynamic testing
- **Scalability:** Adding more robots or obstacles only requires updating configuration files

## Project Features

- **Industry:** Robotics
- **Model:** Agent-Based
- **Duration:** 3 months`,
  },
];

# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add custom id field (uid) to Agent table and API.

#### Acceptance Criteria
- [ ] Add uid field to Agent table or collection
- [ ] uid field is unique
- [ ] uid field is a string
- [ ] uid field is indexed
- [ ] add uid field in agent dto

#### Implementation Details
If it is relational database, create a migration to add uid field to Agent table, restrict it to be unique and add index to uid field.

If it is non-relational database, add uid field to class that describe Agent collection, restrict it to be unique and add index to uid field.

Add uid field in agent dto. Check if create/update agent endpoint is using agent dto. If not, update it to use agent dto.

#### Time/Effort Estimates
- 2 hour

### Ticket 2: Create endpoint to check if uid is exist.

#### Acceptance Criteria
- [ ] Create endpoint to check if uid is exist
- [ ] Endpoint should return true if uid is exist and false if uid is not exist

#### Implementation Details
Create endpoint to check if uid is exist. Create a query to find agent by uid. If agent is exist, return true. If agent is not exist, return false.

#### Time/Effort Estimates
- 2 hour

### Ticket 3: Add uid field to Create/Update Agent form.

#### Acceptance Criteria
- [ ] Add uid input to Create/Update Agent form
- [ ] on blur, check if uid is unique
- [ ] show error message if uid is not unique

#### Implementation Details
Add uid input to Create/Update Agent form. Add blur event listener to uid input. On blur, check if uid is unique sending request to the api. If not, show error message.

#### Time/Effort Estimates
- 4 hour

### Ticket 4: Update getShiftsByFacility function to return uid in metadata from agents table/collection. 

#### Acceptance Criteria
- [ ] getShiftsByFacility function should return uid in metadata from agents table/collection.

#### Implementation Details
Check if getShiftsByFacility function is returning uid in metadata from agents table/collection. If not, update it to return uid in metadata from agents table/collection. Find a place in getShiftsByFacility function that return metadata from agents table/collection and add uid field to metadata.

#### Time/Effort Estimates
- 1 hour

### Ticket 5: Update generateReport function to use uid instead of id.

#### Acceptance Criteria
- [ ] generateReport function should use uid instead of id

#### Implementation Details
Find a place in generateReport function that use id and replace it with uid.

#### Time/Effort Estimates
- 1 hour
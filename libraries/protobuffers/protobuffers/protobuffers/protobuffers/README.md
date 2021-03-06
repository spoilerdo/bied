# Protocol Documentation

<a name="top"></a>

## Table of Contents

- [consent.proto](#consent.proto)

  - [consent.service](#consent.service)

- [datasource.proto](#datasource.proto)

  - [datasource.service](#datasource.service)

- [question.proto](#question.proto)

  - [question.service](#question.service)

- [questionnaire.proto](#questionnaire.proto)

  - [questionnaire.service](#questionnaire.service)

- [questionType.proto](#questionType.proto)

- [research.proto](#research.proto)

  - [research.service](#research.service)

- [user.proto](#user.proto)

  - [user.service](#user.service)


- [userInformation](#userInformation.proto)

  - [userInformation.service](#userInformation.service)

<p align="right"><a href="#top">Top</a></p>
<a name="consent.proto"></a>

## Consent.proto

Consent related messages.

| Field      | Type                            | Label    | Description                               |
| ---------- | ------------------------------- | -------- | ----------------------------------------- |
| id         | [string](#string)               | optional | ID of the consent                         |
| userId     | [string](#string)               | optional | ID of the user that contains this consent |
| datasource | [Datasource](#datasource.proto) | optional | Relation to the datasource                |
| consent    | [bool](#bool)                   | optional | Given consent by user                     |
| uts        | [int64](#int64)                 | optional | Specific time of given consent            |

<a name="consents"></a>

### Consents

Represents a list of [Consent](#consent.proto)

| Field      | Type                                    | Label    | Description                               |
| ---------- | --------------------------------------- | -------- | ----------------------------------------- |
| consents | [Consent](#consent.proto) | repeated | list of consent proto buffers |

<a name="consentRequest"></a>

### ConsentRequest

Represents creating of a [Consent](#consent.proto)

| Field      | Type                                    | Label    | Description                               |
| ---------- | --------------------------------------- | -------- | ----------------------------------------- |
| userId     | [string](#string)                       | optional | ID of the user that contains this consent |
| datasourceId | [string](#string) |  | Relation to datasource |
| consent    | [bool](#bool)                           | optional | Given consent by user                     |
| uts        | [int64](#int64)                         | optional | Specific time of given consent            |


<a name="consentEditRequest"></a>

### ConsentEditRequest
Represents editing of a [Consent](#consent.proto)

| Field      | Type                                    | Label    | Description                               |
| ---------- | --------------------------------------- | -------- | ----------------------------------------- |
| id         | [string](#string)                       | optional | ID of the consent to edit
| userId     | [string](#string)                       | optional | ID of the user that contains this consent |
| datasourceId | [string](#string) | | Relation to datasource |
| consent    | [bool](#bool)                           | optional | Given consent by user                     |
| uts        | [int64](#int64)                         | optional | Specific time of given consent            |

<a name="userIdRequest-consent"></a>

### UserIdRequest consent

Represents getting or deleting consent by userId

| Field | Type              | Label    | Description       |
| ----- | ----------------- | -------- | ----------------- |
| id    | [string](#string) | optional | ID of the consent |

<a name="consentIdRequest"></a>

### ConsentIdRequest

Represents getting/updating/deleting a single consent by Id

| Field | Type              | Label    | Description       |
| ----- | ----------------- | -------- | ----------------- |
| consentId    | [string](#string) | | ID of the consent |

<a name="consentEmptyResponse"></a>

### ConsentEmptyResponse

Represents and empty message that the DeleteConsent in the service will return.

### Consent.service

Service for handling consents

| Method Name   | Request Type                            | Response Type                    | Description                                         |
| ------------- | --------------------------------------- | -------------------------------- | --------------------------------------------------- |
| GetConsents   | [UserIdReqeust](#userIdReqeust-consent) | [Consents](#consents) | Used to get all consents for a user                 |
| GetConsent | [ConsentIdReqeust](#consentIdRequest) | [ConsentEmptyResponse](#consentEmptyResponse) | Used to get a single consent |
| CreateConsent | [ConsentRequest](#consentRequest)       | [Consent](#consent.proto)        | Used to create a new consent                        |                       |
| DeleteAllConsent | [UserIdRequest](#userIdRequest-consent) | [ConsentEmptyResponse](#consentEmptyResponse)        | Used to delete all consents of an user |
| DeleteConsent | [ConsentIdRequest](#consentIdRequest) | [ConsentEmptyResponse](#consentEmptyResponse) | Used to delete a single consent of an user |
| EditConsent   | [ConsentEditRequest](#consentEditRequest)       | [Consent](#consent.proto)        | Used to edit a consent                              |



<p align="right"><a href="#top">Top</a></p>
<a name="datasource.proto"></a>

## Datasource.proto

This file contains a message for describing a datasource.

| Field       | Type              | Label    | Description                                              |
| ----------- | ----------------- | -------- | -------------------------------------------------------- |
| id          | [string](#string) | optional | ID of Datasource                                         |
| name        | [string](#string) | optional | Name of the datasource                                   |
| description | [string](#string) | optional | Description of the datasource                            |
| reference   | [string](#string) | optional | Reference to identify the given answers                  |
| active      | [bool](#bool)     | optional | Boolean indicating if the datasource is currently active |

<a name="datasourceRequest"></a>

### DataSourceRequest

Represents message for creating a datasource

| Field       | Type              | Label    | Description                                              |
| ----------- | ----------------- | -------- | -------------------------------------------------------- |
| name        | [string](#string) | optional | Name of the datasource                                   |
| description | [string](#string) | optional | Description of the datasource                            |
| reference   | [string](#string) | optional | Reference to identify the given answers                  |
| active      | [bool](#bool)     | optional | Boolean indicating if the datasource is currently active |

<a name="datasources"></a>

### Datasources

Represents a list of [Datasource](#datasource.proto)

| Field      | Type                                    | Label    | Description                               |
| ---------- | --------------------------------------- | -------- | ----------------------------------------- |
| datasources | [Datasource](#datasource.proto) | repeated | list of datasource proto buffers |

<a name="datasourceIdRequest"></a>

### DatasourceEditRequest

Represents message for editing a datasource

| Field       | Type              | Label    | Description                                              |
| ----------- | ----------------- | -------- | -------------------------------------------------------- |
| id        | [string](#string) | optional | id of the datasource to edit                
| name        | [string](#string) | optional | Name of the datasource                                   |
| description | [string](#string) | optional | Description of the datasource                            |
| reference   | [string](#string) | optional | Reference to identify the given answers                  |
| active      | [bool](#bool)     | optional | Boolean indicating if the datasource is currently active |


### DatasourceIdRequest

Represents getting, editing or deleting datasources by id

| Field | Type              | Label    | Description          |
| ----- | ----------------- | -------- | -------------------- |
| id    | [string](#string) | optional | ID of the datasource |

### Datasource.service

Service for handling datasources

| Method Name      | Request Type                                | Response Type                          | Description          |
| ---------------- | ------------------------------------------- | -------------------------------------- | -------------------- |
| GetDataSources   | -                                           | [Datasources](#datasources) | Get all datasources  |
| GetDatasource    | [DatasourceIdRequest](#datasourceIdRequest) | [Datasource](#datasource.proto)        | Get datasource by Id |
| CreateDatasource | [DatasourceRequest](#datasourceRequest)     | [Datasource](#datasource.proto)        | Create datasource    |
| EditDatasource   | [DatasourceEditRequest](#DatasourceEditRequest) | [Datasource](#datasource.proto)        | Edit datasource      |
| DeleteDatasource | [DatasourceIdReqeust](#datasourceIdRequest) | [Datasource](#datasource.proto)        | Delete datasource    |

<p align="right"><a href="#top">Top</a></p>
<a name="question.proto"></a>

## Question

Represents the question in a questionnaire

| Field       | Type                                | Label    | Description                                                     |
| ----------- | ----------------------------------- | -------- | --------------------------------------------------------------- |
| id          | [string](#string)                   | optional | The id of the question                                          |
| label       | [string](#string)                   | optional | Label of the question (for instance the given question)         |
| type        | [questionType](#questionType.proto) | optional | The type of the question                                        |
| description | [string](#string)                   | optional | The description of a question                                   |
| data        | [string](#string)                   | optional | The question specific data (for instance the multi choice data) |
| index       | [int32](#int32)                     | optional | The index of the question in a questionnaire                    |
| required    | [bool](#bool)                       | optional | State that the question is required to answer                   |

### QuestionRequest

Represents creating, editing, deleting a question

| Field       | Type                                | Label    | Description                                                     |
| ----------- | ----------------------------------- | -------- | --------------------------------------------------------------- |
| label       | [string](#string)                   | optional | Label of the question (for instance the given question)         |
| type        | [questionType](#questionType.proto) | optional | The type of the question                                        |
| description | [string](#string)                   | optional | The description of a question                                   |
| data        | [string](#string)                   | optional | The question specific data (for instance the multi choice data) |
| index       | [int32](#int32)                     | optional | The index of the question in a questionnaire                    |
| required    | [bool](#bool)                       | optional | State that the question is required to answer                   |

<p align="right"><a href="#top">Top</a></p>
<a name="questionnaire.proto"></a>

## Questionnaire.proto

This file contains a message for describing a questionnaire.

| Field       | Type                        | Label    | Description                      |
| ----------- | --------------------------- | -------- | -------------------------------- |
| id          | [string](#string)           | optional | ID of questionnaire              |
| name        | [string](#string)           | optional | Name of the questionnaire        |
| description | [string](#string)           | optional | Description of the questionnaire |
| question    | [question](#question.proto) | repeated | Questionnaire questions          |

<a name="questionnaireCreateRequest"></a>

### QuestionnaireCreateRequest

Represents creating a questionnaire

| Field       | Type                                | Label    | Description                              |
| ----------- | ----------------------------------- | -------- | ---------------------------------------- |
| name        | [string](#string)                   | optional | Name of the questionnaire                |
| description | [string](#string)                   | optional | Description of the questionnaire         |
| question    | [QuestionRequest](#questionRequest) | repeated | Questionnaire questions, QuestionRequest |

<a name="questionnaireEditRequest"></a>

### QuestionnaireEditRequest

Represents editing a questionnaire

| Field       | Type                                | Label    | Description                              |
| ----------- | ----------------------------------- | -------- | ---------------------------------------- |
| id          | [string](#string)                   | optional | id of the 
questionnaire
| name        | [string](#string)                   | optional | Name of the questionnaire                |
| description | [string](#string)                   | optional | Description of the questionnaire         |
| question    | [QuestionRequest](#questionRequest) | repeated | Questionnaire questions, QuestionRequest |

<a name="questionnaireIdRequest"></a>

### QuestionnaireIdRequest

Represents getting or deleting questionnaire by userId

| Field | Type              | Label    | Description             |
| ----- | ----------------- | -------- | ----------------------- |
| id    | [string](#string) | optional | ID of the questionnaire |

<a name="questionnaireEmptyResponse"></a>

### QuestionnaireEmptyResponse

Empty proto

### Questionnaire.service

Service for handling questionnaires

| Method Name         | Request Type                                              | Response Type                                             | Description             |
| ------------------- | --------------------------------------------------------- | --------------------------------------------------------- | ----------------------- |
| CreateQuestionnaire | [QuestionnaireCreateRequest](#questionnaireCreateRequest) | [Questionnaire](#questionnaire.proto)                     | Create questionnaire    |
| DeleteQuestionnaire | [QuestionnaireIdRequest](#questionnaireIdRequest)         | [QuestionnaireEmptyResponse](#questionnaireEmptyResponse) | Delete questionnaire    |
| UpdateQuestionnaire | [QuestionnaireEditRequest](#questionnaireEditRequest)     | [Questionnaire](#questionnaire.proto)                     | Edit questionnaire      |
| GetQuestionnaire    | [QuestionnaireIdRequest](#questionnaireIdRequest)         | [Questionnaire](#questionnaire.proto)                     | Get questionnaire by Id |

<p align="right"><a href="#top">Top</a></p>
<a name="questionType.proto"></a>

## QuestionType.proto

This file contains an enum for describing question types.

| Values          |
| --------------- |
| MULTIPLE_CHOICE |
| LIKERT          |
| TEXT            |
| NUMERIC         |
| DATE            |
| TIME            |

<p align="right"><a href="#top">Top</a></p>
<a name="research.proto"></a>

## Research.proto

This file contains a message for describing a research.

| Field       | Type                            | Label    | Description                                            |
| ----------- | ------------------------------- | -------- | ------------------------------------------------------ |
| id          | [string](#string)               | optional | ID of research                                         |
| name        | [string](#string)               | optional | Name of the research                                   |
| description | [string](#string)               | optional | Description of the research                            |
| imageUrl    | [string](#string)               | optional | Path to image                                          |
| startDate   | [int64](#int64)                 | optional | Start date for the research, saved as Unix Timestamp   |
| endDate     | [int64](#int64)                 | optional | End date for the research, saved as Unix Timestamp     |
| active      | [bool](#bool)                   | optional | Boolean indicating if the research is currently active |
| ownerId     | [string](#string)               | optional | User Id of the owner of this research                  |
| datasources | [datasource](#datasource.proto) | repeated | Datasources coupled to the research                    |

<a name="researches"></a>

### Researches

Represents a list of [Research](#research.proto)

| Field      | Type                                    | Label    | Description                               |
| ---------- | --------------------------------------- | -------- | ----------------------------------------- |
| researches | [Research](#research.proto) | repeated | list of research proto buffers |

<a name="researchCreateRequest"></a>

### ResearchCreateRequest

Represents creating a request

| Field       | Type                            | Label    | Description                                            |
| ----------- | ------------------------------- | -------- | ------------------------------------------------------ |
| name        | [string](#string)               | optional | Name of the research                                   |
| description | [string](#string)               | optional | Description of the research                            |
| imageUrl    | [string](#string)               | optional | Path to image                                          |
| startDate   | [int64](#int64)                 | optional | Start date for the research, saved as Unix Timestamp   |
| endDate     | [int64](#int64)                 | optional | End date for the research, saved as Unix Timestamp     |
| active      | [bool](#bool)                   | optional | Boolean indicating if the research is currently active |
| ownerId     | [string](#string)               | optional | User Id of the owner of this research                  |
| datasources | [datasource](#datasource.proto) | repeated | Datasources coupled to the research                    |

<a name="researchEditRequest"></a>

### ResearchEditRequest

Represents editing a request

| Field       | Type                            | Label    | Description                                            |
| ----------- | ------------------------------- | -------- | ------------------------------------------------------ |
| id          | [string](#string)               | optional | Id of the research
| name        | [string](#string)               | optional | Name of the research                                   |
| description | [string](#string)               | optional | Description of the research                            |
| imageUrl    | [string](#string)               | optional | Path to image                                          |
| startDate   | [int64](#int64)                 | optional | Start date for the research, saved as Unix Timestamp   |
| endDate     | [int64](#int64)                 | optional | End date for the research, saved as Unix Timestamp     |
| active      | [bool](#bool)                   | optional | Boolean indicating if the research is currently active |
| ownerId     | [string](#string)               | optional | User Id of the owner of this research                  |
| datasources | [datasource](#datasource.proto) | repeated | Datasources coupled to the research                    |

<a name="getResearchesRequest"></a>

### GetResearchesRequest

empty proto

<a name="researchEmptyResponse"></a>

### ResearchEmptyResponse

Empty proto

<a name="datasourceIdRequest-research"></a>

### DatasourceIdRequest research

Represents datasource get by id request

| Field | Type              | Label    | Description          |
| ----- | ----------------- | -------- | -------------------- |
| id    | [string](#string) | optional | ID of the datasource |

<a name="emailRequest-research"></a>

### EmailRequest research

Represents email request with email

| Field | Type              | Label    | Description             |
| ----- | ----------------- | -------- | ----------------------- |
| email | [string](#string) | repeated | Email address to send to |

<a name="emailEmptyResponse-research"></a>

### EmailEmptyResponse research

Empty proto

### Research.service

Service for handling researches

| Method Name                  | Request Type                                         | Response Type                                   | Description                           |
| ---------------------------- | ---------------------------------------------------- | ----------------------------------------------- | ------------------------------------- |
| GetResearches                | -                                                    | [Researches](#researches)              | Get all researches                    |
| GetResearch                  | [ResearchIdRequest](#researchIdRequest)              | [Research](#research.proto)                     | Get research by Id                    |
| CreateResearch               | [ResearchCreateRequest](#researchCreateRequest)      | [Research](#research.proto)                     | Create research                       |
| EditResearch                 | [ResearchEditRequest](#researchEditRequest)          | [Research](#research.proto)                     | Edit research                         |
| DeleteResearch               | [ResearchIdRequest](#researchIdRequest)              | [ResearchEmptyResponse](#researchEmptyResponse) | Delete research                       |
| AddDatasourceToResearch      | [Datasource](#datesource.proto)                      | [Research](#research.proto)                     | Add a datasource to a research        |
| RemoveDatasourceFromResearch | [DatasourceIdReqeust](#datasourceIdRequest.research) | [Research](#research.proto)                     | Removing a datasource from a research |
| InviteUsersToResearch        | [EmailRequest](#emailRequest-research)                        | [EmailEmptyResponse](#EmailEmptyResponse-research)       | Send an invite to an email            |

<p align="right"><a href="#top">Top</a></p>
<a name="user.proto"></a>

## User.proto

The user that contains user information and a list of consent for every datasource per research.

| Field           | Type                                      | Label    | Description                       |
| --------------- | ----------------------------------------- | -------- | --------------------------------- |
| id              | [string](#string)                         | optional | ID of user                        |
| firstname       | [string](#string)                         | optional | Firstname of the user             |
| lastname        | [string](#string)                         | optional | Lastname of the user              |
| email           | [string](#string)                         | optional | Email of the user                 |
| password        | [string](#string)                         | optional | Password of the user              |
| userInformation | [userInformation](#userInformation.proto) | optional | Link to detailed user information |
| consents        | [consent](#consent.proto)                 | repeated | A list of consents from the user  |

<a name="userResponses"></a>

### UserResponses

Represents a list of [UserResponse](#userResponse)

| Field      | Type                                    | Label    | Description                               |
| ---------- | --------------------------------------- | -------- | ----------------------------------------- |
| userResponses | [UserResponse](#userResponse) | repeated | list of userResponse proto buffers |

<a name="userRequest"></a>

### UserRequest

Represents user request with userId

| Field | Type              | Label    | Description    |
| ----- | ----------------- | -------- | -------------- |
| id    | [string](#string) | optional | ID of the user |

<a name="userCreateRequest"></a>

### UserCreateRequest

Represents creating a user

| Field     | Type              | Label    | Description           |
| --------- | ----------------- | -------- | --------------------- |
| firstname | [string](#string) | optional | Firstname of the user |
| lastname  | [string](#string) | optional | Lastname of the user  |
| email     | [string](#string) | optional | Email of the user     |
| password  | [string](#string) | optional | Password of the user  |

<a name="userEditRequest"></a>

### UserEditRequest

Represents editing a user

| Field     | Type              | Label    | Description           |
| --------- | ----------------- | -------- | --------------------- |
| id        | [string](#string) | optional | id of the user        |
| firstname | [string](#string) | optional | Firstname of the user |
| lastname  | [string](#string) | optional | Lastname of the user  |
| email     | [string](#string) | optional | Email of the user     |

<a name="userEmptyRequest"></a>

### UserEmptyResponse

Empty proto

<a name="resetPasswordRequest"></a>

### ResetPasswordRequest

Represents a password reset request

| Field                   | Type              | Label    | Description                   |
| ----------------------- | ----------------- | -------- | ----------------------------- |
| restToken               | [string](#string) | optional | Reset token                   |
| newPassword             | [string](#string) | optional | The new password              |
| newPasswordConfirmation | [string](#string) | optional | The new password confirmation |

<a name="userResponse"></a>

### UserResponse

Represents a user, as a response

| Field     | Type                                      | Label    | Description                       |
| --------- | ----------------------------------------- | -------- | --------------------------------- |
| id        | [string](#string)                         | optional | ID of user                        |
| firstname | [string](#string)                         | optional | Firstname of the user             |
| lastname  | [string](#string)                         | optional | Lastname of the user              |
| email     | [string](#string)                         | optional | Email of the user                 |
| userInfo  | [userInformation](#userInformation.proto) | optional | Link to detailed user information |
| consents  | [consent](#consent.proto)                 | repeated | A list of consents from the user  |

### User.service

Service for handling users

| Method Name   | Request Type                                  | Response Type                           | Description            |
| ------------- | --------------------------------------------- | --------------------------------------- | ---------------------- |
| GetUsers      | -                                             | [UserResponses](#userResponses)         | Get all users          |
| GetUser       | [UserRequest](#userRequest)                   | [UserResponse](#userResponse)                 | Get user by ID         |
| CreateUser    | [UserCreateRequest](#userCreateRequest)       | [UserResponse](#userResponse)                 | Create user            |
| EditUser      | [UserEditRequest](#userEditRequest)           | [UserResponse](#userResponse)                 | Edit user              |
| DeleteUser    | [UserRequest](#userRequest)                   | [UserEmptyResponse](#userEmptyResponse) | Delete user            |
| ResetPassword | [ResetPasswordRequest](#resetPasswordRequest) | [UserResponse](#userResponse)                 | Request password reset |

<p align="right"><a href="#top">Top</a></p>
<a name="userInformation.proto"></a>

## UserInformation.proto

This file contains a message for describing user information.

| Field       | Type              | Label    | Description               |
| ----------- | ----------------- | -------- | ------------------------- |
| userId      | [string](#string) | optional | ID of the user            |
| id          | [string](#string) | optional | ID of the userInformation |
| phoneNumber | [string](#string) | optional | Phonenumber of the user   |

<a name="userInformationIdRequest"></a>

### UserInformationIdRequest

Represents userInformation request with userId

| Field | Type              | Label    | Description    |
| ----- | ----------------- | -------- | -------------- |
| id    | [string](#string) | optional | ID of the user |

<a name="userInformationRequest"></a>

### UserInformationRequest

Represents userInformation for updating user

| Field       | Type              | Label    | Description             |
| ----------- | ----------------- | -------- | ----------------------- |
| userId      | [string](#string) | optional | ID of the user          |
| phoneNumber | [string](#string) | optional | Phone number of the user |

<a name="userInformationEmptyResponse"></a>

### UserInformationEmptyResponse

Empty proto

### UserInformation.service

Service for handling userInformation

| Method Name           | Request Type                                          | Response Type                                                 | Description                         |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------- |
| GetUserInformation    | [UserInformationIdRequest](#userInformationIdRequest) | [UserInformation](#userInformation.proto)                     | Get userInformation by Id           |
| CreateUserInformation | [UserInformationRequest](#userInformationRequest)     | [UserInformation](#userInformation.proto)                     | Create userInformation for a user   |
| EditUserInformation   | [UserInformationRequest](#userInformationRequest)     | [UserInformation](#userInformation.proto)                     | Edit the userInformation for a user |
| DeleteUserInformation | [UserInformationIdRequest](#userInformationIdRequest) | [UserInformationEmptyResponse](#userInformationEmptyResponse) | Delete userInformation by userId    |

<p align="right"><a href="#top">Top</a></p>

## Scalar Value Types

| .proto Type                    | Notes                                                                                                                                           | C++    | Java       | Python      | Go      | C#         | PHP            | Ruby                           |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ---------- | ----------- | ------- | ---------- | -------------- | ------------------------------ |
| <a name="double" /> double     |                                                                                                                                                 | double | double     | float       | float64 | double     | float          | Float                          |
| <a name="float" /> float       |                                                                                                                                                 | float  | float      | float       | float32 | float      | float          | Float                          |
| <a name="int32" /> int32       | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| <a name="int64" /> int64       | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| <a name="uint32" /> uint32     | Uses variable-length encoding.                                                                                                                  | uint32 | int        | int/long    | uint32  | uint       | integer        | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64     | Uses variable-length encoding.                                                                                                                  | uint64 | long       | int/long    | uint64  | ulong      | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32     | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s.                            | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64     | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s.                            | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| <a name="fixed32" /> fixed32   | Always four bytes. More efficient than uint32 if values are often greater than 2^28.                                                            | uint32 | int        | int         | uint32  | uint       | integer        | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64   | Always eight bytes. More efficient than uint64 if values are often greater than 2^56.                                                           | uint64 | long       | int/long    | uint64  | ulong      | integer/string | Bignum                         |
| <a name="sfixed32" /> sfixed32 | Always four bytes.                                                                                                                              | int32  | int        | int         | int32   | int        | integer        | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes.                                                                                                                             | int64  | long       | int/long    | int64   | long       | integer/string | Bignum                         |
| <a name="bool" /> bool         |                                                                                                                                                 | bool   | boolean    | boolean     | bool    | bool       | boolean        | TrueClass/FalseClass           |
| <a name="string" /> string     | A string must always contain UTF-8 encoded or 7-bit ASCII text.                                                                                 | string | String     | str/unicode | string  | string     | string         | String (UTF-8)                 |
| <a name="bytes" /> bytes       | May contain any arbitrary sequence of bytes.                                                                                                    | string | ByteString | str         | []byte  | ByteString | string         | String (ASCII-8BIT)            |


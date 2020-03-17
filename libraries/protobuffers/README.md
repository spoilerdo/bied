# Protocol Documentation
<a name="top"></a>

## Table of Contents

- [consent.proto](#consent.proto)
  
- [datasource.proto](#datasource.proto)
  
- [question.proto](#question.proto)
  
- [questionnaire.proto](#questionnaire.proto)
  
- [questionType.proto](#questionType.proto)

- [research.proto](#research.proto)

- [user.proto](#user.proto)

- [userInformation](#userInformation.proto)


<p align="right"><a href="#top">Top</a></p>
<a name="consent.proto"></a>

## Consent.proto
Relational proto for user on a datasource.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional | ID of the consent
| userId | [string](#string) | optional | ID of the user that contains this consent
| datasource | [Datasource](#datasource.proto) | optional | Relation to the datasource
| consent | [bool](#bool) | optional | Given consent by user
| uts | [int64](#int64) | optional | Specific time of given consent

<p align="right"><a href="#top">Top</a></p>
<a name="datasource.proto"></a>

## Datasource.proto
This file contains a message for describing a datasource.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional | ID of Datasource |
| name | [string](#string) | optional | Name of the datasource |
| description | [string](#string) | optional | Description of the datasource. |
| reference | [string](#string) | optional | Reference to identify the give answers |
| active | [bool](#bool) | optional | Boolean indicating if the datasource is currently active. |

<p align="right"><a href="#top">Top</a></p>
<a name="question.proto"></a>

## Question
Represents the question in a questionnaire

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional | The id of the question
| label | [string](#string) | optional | Label of the question (for instance the given question)
| type | [questionType](#questionType.proto) | optional | The type of the question
| description | [string](#string) | optional | The description of a question
| data | [string](#string) | optional | The question specific data (for instance the multi choice data)
| index | [int32](#int32) | optional | The index of the question in a questionnaire
| required | [bool](#bool) | optional | State that the question is required to answer

<p align="right"><a href="#top">Top</a></p>
<a name="questionnaire.proto"></a>

## Questionnaire.proto
This file contains a message for describing a questionnaire.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional | ID of questionnaire |
| name | [string](#string) | optional | Name of the questionnaire |
| description | [string](#string) | optional | Description of the questionnaire |
| question | [question](#question.proto) | repeated | Questionnaire questions |

<p align="right"><a href="#top">Top</a></p>
<a name="questionType.proto"></a>

## QuestionType.proto
This file contains an enum for describing question types.

| Values |
| ----- |
| MULTIPLE_CHOICE |
| LIKERT |
| TEXT |
| NUMERIC |
| DATE |
| TIME |

<p align="right"><a href="#top">Top</a></p>
<a name="research.proto"></a>

## Research.proto
This file contains a message for describing a research.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional | ID of research |
| name | [string](#string) | optional | Name of the research |
| description | [string](#string) | optional | Description of the research |
| imageUrl | [string](#string) | optional | Path to image |
| startDate | [int64](#int64) | optional | Start date for the research, saved as Unix Timestamp |
| endDate | [int64](#int64) | optional | End date for the research, saved as Unix Timestamp |
| active | [bool](#bool) | optional | Boolean indicating if the research is currently active |
| ownerId | [string](#string) | optional | User Id of the owner of this research |
| datasources | [datasource](#datasource.proto) | repeated | Datasources coupled to the research |

<p align="right"><a href="#top">Top</a></p>
<a name="user.proto"></a>

## User.proto
The user that contains user information and a list of consent for every datasource per research.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| id | [string](#string) | optional | ID of user |
| firstname | [string](#string) | optional | Firstname of the user |
| lastname | [string](#string) | optional | Lastname of the user |
| email | [string](#string) | optional | Email of the user |
| password | [string](#string) | optional | Password of the user |
| userInformation | [userInformation](#userInformation.proto) | optional | Link to detailed user information
| consents | [consent](#consent.proto) | repeated | A list of consents from the user

<p align="right"><a href="#top">Top</a></p>
<a name="userInformation.proto"></a>

## UserInformation.proto
This file contains a message for describing user information.

| Field | Type | Label | Description |
| ----- | ---- | ----- | ----------- |
| userId | [string](#string) | optional | ID of the user |
| id | [string](#string) | optional | ID of the userInformation |
| phoneNumber | [string](#string) | optional | Phonenumber of the user |

<p align="right"><a href="#top">Top</a></p>

## Scalar Value Types

| .proto Type | Notes | C++ | Java | Python | Go | C# | PHP | Ruby |
| ----------- | ----- | --- | ---- | ------ | -- | -- | --- | ---- |
| <a name="double" /> double |  | double | double | float | float64 | double | float | Float |
| <a name="float" /> float |  | float | float | float | float32 | float | float | Float |
| <a name="int32" /> int32 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint32 instead. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="int64" /> int64 | Uses variable-length encoding. Inefficient for encoding negative numbers – if your field is likely to have negative values, use sint64 instead. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="uint32" /> uint32 | Uses variable-length encoding. | uint32 | int | int/long | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="uint64" /> uint64 | Uses variable-length encoding. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum or Fixnum (as required) |
| <a name="sint32" /> sint32 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int32s. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sint64" /> sint64 | Uses variable-length encoding. Signed int value. These more efficiently encode negative numbers than regular int64s. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="fixed32" /> fixed32 | Always four bytes. More efficient than uint32 if values are often greater than 2^28. | uint32 | int | int | uint32 | uint | integer | Bignum or Fixnum (as required) |
| <a name="fixed64" /> fixed64 | Always eight bytes. More efficient than uint64 if values are often greater than 2^56. | uint64 | long | int/long | uint64 | ulong | integer/string | Bignum |
| <a name="sfixed32" /> sfixed32 | Always four bytes. | int32 | int | int | int32 | int | integer | Bignum or Fixnum (as required) |
| <a name="sfixed64" /> sfixed64 | Always eight bytes. | int64 | long | int/long | int64 | long | integer/string | Bignum |
| <a name="bool" /> bool |  | bool | boolean | boolean | bool | bool | boolean | TrueClass/FalseClass |
| <a name="string" /> string | A string must always contain UTF-8 encoded or 7-bit ASCII text. | string | String | str/unicode | string | string | string | String (UTF-8) |
| <a name="bytes" /> bytes | May contain any arbitrary sequence of bytes. | string | ByteString | str | []byte | ByteString | string | String (ASCII-8BIT) |
## **1. User Management Endpoints**

### 1.1. Register a New User

-   **Method**: POST

-   **Endpoint**: /api/users/register


**Body** (JSON):
```json
{

  "name": "John Doe",

  "email": "johndoe@example.com",

  "password": "password123"

}
```

**Expected Response**: 201 Created

```json{
{
  "_id": "user_id",

  "name": "John Doe",

  "email": "johndoe@example.com",

  "token": "JWT_token"

}
```

### 1.2. Login User

-   **Method**: POST

-   **Endpoint**: /api/users/login


**Body** (JSON):
```json 
{

  "email": "johndoe@example.com",

  "password": "password123"

}
```

**Expected Response**: 200 OK
```json{
{
  "_id": "user_id",

  "name": "John Doe",

  "email": "johndoe@example.com",

  "token": "JWT_token"

}
```


### 1.3. Get User Profile

-   **Method**: GET

-   **Endpoint**: /api/users/profile

-   **Headers**:

>Authorization: Bearer "JWT_token"


**Expected Response**: 200 OK
```json{
{
  "_id": "user_id",

  "name": "John Doe",

  "email": "johndoe@example.com"

}
```

## **2. Facility Management Endpoints**

### **2.1. Create a New Facility**

-   **Method**: POST

-   **Endpoint**: /api/facilities

-   **Headers**:
> Authorization: Bearer "JWT_token"


**Body** (JSON):
```json
{

  "name": "Sports Arena",

  "location": "Downtown",

  "capacity": 100

}
```

**Expected Response**: 201 Created
```json{
{
  "_id": "facility_id",

  "name": "Sports Arena",

  "location": "Downtown",

  "capacity": 100

}
```

#### **2.2. Get All Facilities**

-   **Method**: GET

-   **Endpoint**: /api/facilities


**Expected Response**: 200 OK
```json[
  {

    "_id": "facility_id",

    "name": "Sports Arena",

    "location": "Downtown",

    "capacity": 100

  }
```

#### **2.3. Get a Facility by ID**

-   **Method**: GET

-   **Endpoint**: /api/facilities/:id


**Expected Response**: 200 OK
```json{
{
  "_id": "facility_id",

  "name": "Sports Arena",

  "location": "Downtown",

  "capacity": 100

}

```


#### **2.4. Delete a Facility**

-   **Method**: DELETE

-   **Endpoint**: /api/facilities/:id

-   **Headers**:
>Authorization: Bearer "JWT_token"


**Expected Response**: 200 OK
```json{
{
  "message": "Facility deleted successfully"
}
```


### **3. Activity Management Endpoints**

#### **3.1. Create a New Activity**

-   **Method**: POST

-   **Endpoint**: /api/activities

-   **Headers**:


>Authorization: Bearer "JWT_token"


**Body** (JSON):
```json
{

  "name": "Basketball Game",

  "description": "Friendly match",

  "sport": "Basketball",

  "date": "2024-08-15",

  "time": "18:00",

  "location": "Sports Arena",

  "maxParticipants": 10

}

```


**Expected Response**: 201 Created

```json{
{
  "_id": "activity_id",

  "name": "Basketball Game",

  "description": "Friendly match",

  "sport": "Basketball",

  "date": "2024-08-15T00:00:00.000Z",

  "time": "18:00",

  "location": "Sports Arena",

  "maxParticipants": 10,

  "participants": []

}
```


#### **3.2. Get All Activities**

-   **Method**: GET

-   **Endpoint**: /api/activities


**Expected Response**: 200 OK
```json{
{
    "_id": "activity_id",

    "name": "Basketball Game",

    "description": "Friendly match",

    "sport": "Basketball",

    "date": "2024-08-15T00:00:00.000Z",

    "time": "18:00",

    "location": "Sports Arena",

    "maxParticipants": 10,

    "participants": []

  }
```


#### **3.3. Get an Activity by ID**

-   **Method**: GET

-   **Endpoint**: /api/activities/:id


**Expected Response**: 200 OK
```json{
{
  "_id": "activity_id",

  "name": "Basketball Game",

  "description": "Friendly match",

  "sport": "Basketball",

  "date": "2024-08-15T00:00:00.000Z",

  "time": "18:00",

  "location": "Sports Arena",

  "maxParticipants": 10,

  "participants": []

}
```

#### **3.4. Join an Activity**

-   **Method**: POST

-   **Endpoint**: /api/activities/:id/join

-   **Headers**:


>Authorization: Bearer "JWT_token"


**Expected Response**: 200 OK
```json{
{
  "_id": "activity_id",

  "name": "Basketball Game",

  "description": "Friendly match",

  "sport": "Basketball",

  "date": "2024-08-15T00:00:00.000Z",

  "time": "18:00",

  "location": "Sports Arena",

  "maxParticipants": 10,

  "participants": ["user_id"]

}
```


#### **3.5. Leave an Activity**

-   **Method**: POST

-   **Endpoint**: /api/activities/:id/leave

-   **Headers**:


>Authorization: Bearer "JWT_token"


**Expected Response**: 200 OK
```json{
{
  "_id": "activity_id",

  "name": "Basketball Game",

  "description": "Friendly match",

  "sport": "Basketball",

  "date": "2024-08-15T00:00:00.000Z",

  "time": "18:00",

  "location": "Sports Arena",

  "maxParticipants": 10,

  "participants": []

}
```


#### **3.6. Delete an Activity**

-   **Method**: DELETE

-   **Endpoint**: /api/activities/:id

-   **Headers**:


>Authorization: Bearer "JWT_token"


**Expected Response**: 200 OK
```json{
{
  "message": "Activity deleted successfully" 
  }
```
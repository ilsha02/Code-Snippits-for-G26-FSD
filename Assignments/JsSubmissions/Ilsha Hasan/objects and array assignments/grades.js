let grades = {
    "Ilsha": 98,
    "bob": 78,
    "harry": 91,
    "tom": 88,
    "jack": 85,
};


grades["bob"] = 84;

delete grades["tom"];


console.log("Grades of the studdents are : ",grades);

const QUIZ_URL = "https://the-trivia-api.com/api";

/**
 * Function to get all the categories from the API service
 * @returns 
 */
export const getCategories = async () => {

    const response = await fetch(`${QUIZ_URL}/categories`, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });

    const categoryList = await response.json();

    return categoryList;

}

/**
 * Function to get 10 questions by category
 * @param {String} paramCategory 
 */
export const getQuestionsByCategory = async (paramCategory) => {

    let questionList;

    await getCategories()
        .then(async (categoryList) => {
            const categoryObj = categoryList[paramCategory];
            const category = categoryObj[categoryObj.length - 1];
            const response = await fetch(`${QUIZ_URL}/questions?${category}&limit=10`);
            questionList = await response.json();
        })
        .catch(console.log);

    return questionList;

}
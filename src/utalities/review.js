export const getReviews = (personId) => {
  let text = '';
  switch (personId) {
    case 1:
      return {
        text: 'You helped me set food and self-care goals, and provided realistic strategies for meeting those goals in my everyday life. I make a choice in support of my health.',
        name : 'Dhruv',
        designation : 'IT Manager'
    };
      break;
    case 2:
      return {
        text: 'I completed 3 Month Health and Wellness Program with Dt. Garima & I highly recommend working with her! She is professional, knowledgeable, helpful, compassionate in making Diets. I loose 13 kg in 3 months with easy and healthy diets.” Thank you so much Ma’am.',
        name : 'Lucky Choudhary',
        designation : 'Businessmen'
    };
      break;
    case 3:
      return {
        text: 'When I booked for one month plan, i never knew that i can follow diets in a very easy going way with my favourite foods, I immediately felt excited and continued with her. New meals with all new recipes, i love that. Thank-you.',
        name : 'Ankita',
        designation :'Product Dealer'
    };
      break;
    default:
      return '-';
  }
};

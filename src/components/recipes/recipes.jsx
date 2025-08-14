import styled from "styled-components";
import { Difficulty } from "./difficulty";
import chart from "../../imgs/chart.svg";
import stats from "../../imgs/stats.svg";
import clock from "../../imgs/clock.svg";

const RecipeList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  padding-top: 60px;
  margin: 0;
  list-style: none;
  justify-content: center;
`;

const RecipeItem = styled.li`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  background-color: #dfe6e9;
`;

const RecipeTitle = styled.h3`
  font-size: 32px;
  color: #f1c40f; /* Mustard yellow */
  margin: 0;
  text-align: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  align-items: center;
  color: #2d3436;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4ecdc4;
  height: 20px;
`;

const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
`;

export const Recipes = () => (
  <RecipeList>
    <RecipeItem>
      <RecipeImage src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/5/4/2/FNM_060111-Perfect-Patties-009_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1371597638336.webp" alt="Smoked salmon burger" />
      <RecipeTitle>Smoked salmon burger</RecipeTitle>
      <InfoContainer>
        <InfoItem>
          <InfoIcon src={clock} alt="clock" />
          <p>20 min</p>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={chart} alt="chart" />
          <p>6 servings</p>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={stats} alt="stats" />
          <p>210 calories</p>
        </InfoItem>
      </InfoContainer>
      <Difficulty difficulty={0} />
    </RecipeItem>
    <RecipeItem>
      <RecipeImage src="https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2560%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg" alt="Recipe 2" />
      <RecipeTitle>Tomatoes with creamy feta</RecipeTitle>
      <InfoContainer>
        <InfoItem>
          <InfoIcon src={clock} alt="clock" />
          <p>15 min</p>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={chart} alt="chart" />
          <p>3 servings</p>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={stats} alt="stats" />
          <p>600 calories</p>
        </InfoItem>
      </InfoContainer>
      <Difficulty difficulty={0} />
    </RecipeItem>
    <RecipeItem>
      <RecipeImage src="https://assets.bonappetit.com/photos/62bf35ae872a6cfbb260f286/1:1/w_2560%2Cc_limit/0701-tj-recipe-potato-v2.jpg" alt="Recipe 3" />
      <RecipeTitle>Spicy potato salad</RecipeTitle>
      <InfoContainer>
        <InfoItem>
          <InfoIcon src={clock} alt="clock" />
          <p>30 min</p>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={chart} alt="chart" />
          <p>2 servings</p>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={stats} alt="stats" />
          <p>320 calories</p>
        </InfoItem>
      </InfoContainer>
      <Difficulty difficulty={1} />
    </RecipeItem>
    <RecipeItem>
      <RecipeImage src="https://www.cookwithnabeela.com/wp-content/uploads/2025/01/ChickenBiryani.webp" alt="Recipe 4" />
      <RecipeTitle>Sweet chicken biryani</RecipeTitle>
      <InfoContainer>
        <InfoItem>
          <InfoIcon src={clock} alt="clock" />
          <p>40 min</p>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={chart} alt="chart" />
          <p>4 servings</p>
        </InfoItem>
        <InfoItem>
          <InfoIcon src={stats} alt="stats" />
          <p>700 calories</p>
        </InfoItem>
      </InfoContainer>
      <Difficulty difficulty={2} />
    </RecipeItem>
  </RecipeList>
);
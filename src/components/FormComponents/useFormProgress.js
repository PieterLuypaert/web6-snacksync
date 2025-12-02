export const useFormProgress = (values) => {
  const calculateProgress = () => {
    let completed = 0;
    if (values.sandwichName?.length >= 3) completed += 15;
    if (values.hasBread) completed += 15;
    if (values.hasLettuce || values.hasTomato || values.hasCheese)
      completed += 20;
    if (values.hasTopBread) completed += 25;
    if (values.hasFork) completed += 25;
    return completed;
  };

  return calculateProgress();
};

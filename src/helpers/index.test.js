import { getLetterMatchCount } from './index';

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns correct count when there is no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  test('returns correct count when there is 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  test('returns correct count when there is duplicate matching letters', () => {
    const letterMatchCount = getLetterMatchCount('parma', secretWord);
    expect(letterMatchCount).toBe(3);
  });
});

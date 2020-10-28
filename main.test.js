const {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
  tripleAll,
  negativeValues,
  questionings,
  changeToInitials,
  doubleEven,
  titleCaseNames,
  doubleEveryOther,
} = require('./main.js')



describe('onlyOdds', () => {
  it(`given an array of numbers, returns an array with only those numbers that are odd`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    expect(onlyOdds(nums1)).toEqual([1, 3]);
    expect(onlyOdds([5, 101, 0, 7])).toEqual([5, 101, 7]);
  })

  it(`does not modify the original array`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    const original1 = [1, 2, 3, 4];
    const original2 = [5, 101, 0, 7];
    onlyOdds(nums1);
    onlyOdds(nums2);
    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  });
})

describe('onlyEvens', () => {
  it(`given an array of numbers, returns an array with only those numbers that are even`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    expect(onlyEvens(nums1)).toEqual([2, 4]);
    expect(onlyEvens([5, 101, 0, 7])).toEqual([0]);
  })

  it(`does not modify the original array`, () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [5, 101, 0, 7];
    const original1 = [1, 2, 3, 4];
    const original2 = [5, 101, 0, 7];
    onlyEvens(nums1);
    onlyEvens(nums2);
    expect(nums1).toEqual(original1);
    expect(nums2).toEqual(original2);
  });
})

describe('shortNamesOnly', () => {
  it(`given an array of names, returns only those that are fewer than 7 characters long`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Chase',
      'Dallas',
      'Crystal',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const shortNames1 = [
      'Colin',
      'Chase',
      'Dallas',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Daniel',
      'Carlos',
      'Francis',
      'Prem',
      'Jumary',
    ];

    const shortNames2 = [
      'Daniel',
      'Carlos',
      'Prem',
      'Jumary',
    ]


    expect(shortNamesOnly(names1)).toEqual(shortNames1);
    expect(shortNamesOnly(names2)).toEqual(shortNames2);
  })

  it(`does not modify the original array`, () => {
    const original1 = [
      'Colin',
      'Mesuara',
      'Chase',
      'Dallas',
      'Crystal',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const original2 = [
      'LaToddra',
      'Deaundre',
      'Daniel',
      'Carlos',
      'Francis',
      'Prem',
      'Jumary',
    ];

    const names1 = [
      'Colin',
      'Mesuara',
      'Chase',
      'Dallas',
      'Crystal',
      'Marc',
      'Miley',
      'Sharod',
    ];

    const names2 = [
      'LaToddra',
      'Deaundre',
      'Daniel',
      'Carlos',
      'Francis',
      'Prem',
      'Jumary',
    ];

    shortNamesOnly(names1);
    shortNamesOnly(names2);
    expect(names1).toEqual(original1);
    expect(names2).toEqual(original2);
  });
});

describe('sNames', () => {
  it(`returns only the names that begin with a capital S`, () => {
    const names1 = [
      'Colin',
      'Mesuara',
      'Patrick',
      'Fernando',
      'Nicholas',
      'Ilyas',
      'Sonny',
      'Steve',
      'Greg',
      'Timothy',
    ];

    const sNames1 = [
      'Sonny',
      'Steve',
    ];

    const names2 = [
      'Superman',
      'Spiderman',
      'Batman',
      'Wonderman',
    ];

    const sNames2 = [
      'Superman',
      'Spiderman',
    ];
    
    expect(sNames(names1)).toEqual(sNames1);
    expect(sNames(names2)).toEqual(sNames2);
  });

  it(`does not modify the original array`, () => {
    const original1 = [
      'Colin',
      'Mesuara',
      'Patrick',
      'Fernando',
      'Nicholas',
      'Ilyas',
      'Sonny',
      'Steve',
      'Greg',
      'Timothy',
    ];

    const original2 = [
      'Sonny',
      'Steve',
    ];

    const names1 = [
      'Colin',
      'Mesuara',
      'Patrick',
      'Fernando',
      'Nicholas',
      'Ilyas',
      'Sonny',
      'Steve',
      'Greg',
      'Timothy',
    ];

    const names2 = [
      'Sonny',
      'Steve',
    ];

    sNames(names1);
    sNames(names2);
    expect(names1).toEqual(original1);
    expect(names2).toEqual(original2);
  });
});

describe('tripleAll', () => {
  it(`triples all numbers passed in`, () => {
    const originalNumbers1 = [1, 2, 3, 4];
    const numbers1 = [1, 2, 3, 4];
    const originalNumbers2 = [-5, 101, 0];
    const numbers2 = [-5, 101, 0];
    expect(tripleAll(numbers1)).toEqual([3, 6, 9, 12]);
    expect(tripleAll(numbers2)).toEqual([-15, 303, 0]);
    expect(numbers1).toEqual(originalNumbers1);
    expect(numbers2).toEqual(originalNumbers2);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers1 = [1, 2, 3, 4];
    const numbers1 = [1, 2, 3, 4];
    const originalNumbers2 = [-5, 101, 0, 32.5];
    const numbers2 = [-5, 101, 0, 32.5];
    tripleAll(numbers1)
    tripleAll(numbers2)
    expect(numbers1).toEqual(originalNumbers1);
    expect(numbers2).toEqual(originalNumbers2);
  })
})


describe('negativeValues', () => {
  it(`returns numbers unchanged if they're negative`, () => {
    expect(negativeValues([-1, -3, -1000])).toEqual([-1, -3, -1000]);
    expect(negativeValues([-1, -5, -100])).toEqual([-1, -5, -100]);
  })
  
  it(`returns negative versions of positive numbers`, () => {
    expect(negativeValues([-1, -3, 1000])).toEqual([-1, -3, -1000]);
    expect(negativeValues([-1, -5, -100])).toEqual([-1, -5, -100]);
  })

  it(`can handle zeroes`, () => {
    expect(negativeValues([0, 0, 0])).toEqual([0, 0, 0]);
    expect(negativeValues([0])).toEqual([0]);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers = [-1, -3, 1000];
    const numbers = [-1, -3, 1000];
    negativeValues(numbers)
    expect(numbers).toEqual(originalNumbers);
  })
})


describe('questionings', () => {
  it(`adds an exclamation point to the end of each string`, () => {
    expect(questionings(['hello', 'there', 'you absolute fiend'])).toEqual(['hello?', 'there?', 'you absolute fiend?']);
    expect(questionings(['hey', 'you'])).toEqual(['hey?', 'you?']);
  })

  it(`doesn't modify the original array`, () => {
    const originalGreetings = ['hello', 'there', 'you absolute fiend'];
    const greetings = ['hello', 'there', 'you absolute fiend'];
    questionings(greetings)
    expect(greetings).toEqual(originalGreetings);
  })
})


describe('changeToInitials', () => {
  it(`will return the first letters from each word`, () => {
    expect(changeToInitials(['Colin Jaffe', 'Mesuara Kaleziq'])).toEqual(['CJ', 'MK'])
    expect(changeToInitials(['Larry Bird', 'Robert Parrish'])).toEqual(['LB', 'RP'])
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers = [-1, -3, 1000];
    const numbers = [-1, -3, 1000];
    negativeValues(numbers)
    expect(numbers).toEqual(originalNumbers);
  })
})

describe('doubleEven', () => {
  it(`doubles all even numbers passed in`, () => {
    expect(doubleEven([1, 2, 3, 4, 101, 0, 5])).toEqual([1, 4, 3, 8, 101, 0, 5]);
  })
  
  it(`can handle negative numbers`, () => {
    expect(doubleEven([-5, -1, -100, -2])).toEqual([-5, -1, -200, -4]);
  })
})

describe('titleCaseNames', () => {
  it(`uppercases the first letter of each name (as a string) in the given array`, () => {
    expect(titleCaseNames(['colin', 'mesuara', 'genghis', 'pak', 'ginny', 'michael', 'tenzin'])).toEqual(['Colin', 'Mesuara', 'Genghis', 'Pak', 'Ginny', 'Michael', 'Tenzin'])
  })

  it(`lowercases the other letters of each name`, () => {
    expect(titleCaseNames(['cOlin', 'geNghis', 'mesUara', 'ginny', 'michael', 'pak', 'tenzin'])).toEqual(['Colin', 'Genghis', 'Mesuara', 'Ginny', 'Michael', 'Pak', 'Tenzin'])
  })
})

describe('doubleEveryOther', () => {
  it(`doubles every other number`, () => {
    const numbers1 = [2, 3, 4, 5, 6];
    const numbers2 = [20, 36, 400, 5, 6];
    expect(doubleEveryOther(numbers1)).toEqual([2, 6, 4, 10, 6]);
    expect(doubleEveryOther(numbers2)).toEqual([20, 72, 400, 10, 6]);
  })

  it(`doesn't modify the original array`, () => {
    const originalNumbers = [-1, -3, 1000];
    const numbers = [-1, -3, 1000];
    doubleEveryOther(numbers)
    expect(numbers).toEqual(originalNumbers);
  })
})


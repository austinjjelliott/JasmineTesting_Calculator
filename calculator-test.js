
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100,
    years: 10,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('1.06')
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 50000,
    years: 25,
    rate: 9
  };
  expect(calculateMonthlyPayment(values)).toEqual('419.60')
});

it("should work when given decimal values",() => {
  const values = {
    amount: 2500.75,
    years: 10.5,
    rate: 4.66
  }
  expect(calculateMonthlyPayment(values)).toEqual('25.14');
  });

/// etc (test)

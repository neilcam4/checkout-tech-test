// shop.checkout('aBc') # => -1
// shop.checkout('-B8x') # => -1
// shop.checkout(18) # => -1
// shop.checkout('AA') # => 100
// shop.checkout('ABCD') # => 115
// shop.checkout('AAA') # => 130
// shop.checkout('AAAAAA') # => 260

describe('CHECKOUT', function(){
    it('should return 50 when A entered', function(){
        let string = 'A'
        let result = checkout(string)
        expect(result).toEqual(50)
    })
    it('should return 30 if B is entered', function(){
        let string = 'B'
        let result = checkout(string)
        expect(result).toEqual(30)
    })
    it('should return 20 if its a C', function(){
        let string = 'C'
        let result = checkout(string)
        expect(result).toEqual(20)
    })
    it('should return 15 if string is D', function(){
        let string = 'D'
        let result = checkout(string)
        expect(result).toEqual(15)
    })
    it('should return 100 if string is AA', function(){
        let string = 'AA'
        let result = checkout(string)
        expect(result).toEqual(100)
    })
    it('returns 115 if string is ABCD', function(){
         let string = 'ABCD'
         let result = checkout(string)
        expect(result).toEqual(115)
    })
    it('returns 130 if string is AAA', function(){
        let string = 'AAA'
         let result = checkout(string)
        expect(result).toEqual(130)
    })
    it('returns 45 if string is BB', function(){
        let string = 'BB'
         let result = checkout(string)
        expect(result).toEqual(45)
    })
    it('returns 260 if string is AAAAAA', function(){
        let string = 'AAAAAA'
        let result = checkout(string)
        expect(result).toEqual(260)
    })
    it('returns -1 if string is a number', function(){
        let string = 'q'
        let result = checkout(string)
        expect(result).toEqual(-1)
    })
})
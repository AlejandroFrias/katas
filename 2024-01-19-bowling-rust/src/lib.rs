pub fn bowling(rolls: & [i32]) -> i32 {
    let mut score: i32 = rolls.iter().sum();
    let mut bonus: i32 = if rolls.len() > 2 {
        5
    } else {
        0
    };

     return score + bonus;

}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn no_rolls() {
        let result = bowling(& []);
        assert_eq!(result, 0);
    }

    #[test]
    fn one_roll_one_pin() {
        let result = bowling(& [1]);
        assert_eq!(result, 1);
    }

    #[test]
    fn one_roll_two_pins() {
        let result = bowling(& [2]);
        assert_eq!(result, 2);
    }

    #[test]
    fn two_rolls_two_pins() {
        let result = bowling(& [2,2]);
        assert_eq!(result, 4);
    }

    #[test]
    fn spare_bonus_five() {
        let result = bowling(& [9,1,5]);
        assert_eq!(result, 20);
    }

    #[test]
    fn double_spare() {
        let result = bowling(& [9,1,5,5]);
        assert_eq!(result, 25);
    }

    #[test]
    fn spare_bonus_seven() {
        let result = bowling(& [8,2,7]);
        assert_eq!(result, 24);
    }
}

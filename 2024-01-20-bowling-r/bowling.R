# Get's a value from vector, defaulting to 0 if the index doesn't exist in
# the vector
#
# thirdRoll <- getRoll(c(1, 2), 3)
# thirdRoll
# [1] 0
getRoll <- function(rolls, rollIndex) {
  if (length(rolls) == 0) {
    return(0)
  }
  ifelse(is.na(rolls[rollIndex]), 0, rolls[rollIndex])
}

bowling <- function(rolls = c()) {
  if (length(rolls) == 0) {
    return(0)
  }
  score <- sum(rolls)
  for (index in 1:length(rolls)) {
    if (rolls[index] == 10) {
      score <- score + getRoll(rolls, index + 1) + getRoll(rolls, index + 2)
    }
  }
  score
}

library(testthat)

test_that(
  "Bowling score", {
    expect_equal(bowling(), 0)
    expect_equal(bowling(c(1)), 1)
    expect_equal(bowling(c(1, 2)), 3)
    expect_equal(bowling(c(10)), 10)
    expect_equal(bowling(c(10, 5)), 20)
    expect_equal(bowling(c(10, 7)), 24)
    expect_equal(bowling(c(10, 7, 3)), 30)
    expect_equal(bowling(c(0, 0, 10, 7, 3)), 30)
  }
)
test_that(
  "getRoll with default 0", {
    expect_equal(getRoll(c(), 1), 0)
    expect_equal(getRoll(c(3), 1), 3)
    expect_equal(getRoll(c(3, 5), 2), 5)
    expect_equal(getRoll(c(3, 5), 3), 0)
  }
)

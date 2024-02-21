from getpass4 import getpass

def green(skk):
    return "\033[92m{}\033[00m".format(skk)

def purple(skk):
    return "\033[95m{}\033[00m".format(skk)

def grey(skk):
    return "\033[90m{}\033[00m".format(skk)

player1_secret_word = getpass(purple("Player 1, enter secret word: "))
player2_secret_word = getpass(green("Player 2, enter secret word: "))

"""
Gets the number of letters that match between the two words, location not important
"""
def get_number_of_matching_letters(word1, word2):
    matches = 0
    for letter in word1:
        if letter in word2:
            matches += 1
    return str(matches)

winner = 0
while winner <= 0:
    guess1 = input(grey("Player 1, enter your guess: "))
    guess2 = input(grey("Player 2, enter your guess: "))
    if guess1 == player2_secret_word:
        winner += 1
    else:
        print(purple("Player 1: " + guess1 + " => " + get_number_of_matching_letters(player2_secret_word, guess1)))

    if guess2 == player1_secret_word:
        winner += 2
    else:
        print(green("Player 2: " + guess2 + " => " + get_number_of_matching_letters(player1_secret_word, guess2)))
    print()

if winner == 1:
    print("Player 1 wins!")
    print("The secret word was", player2_secret_word)
    print("Player 1's secret word was", player1_secret_word)
elif winner == 2:
    print("Player 2 wins!")
    print("The secret word was", player1_secret_word)
    print("Player 2's secret word was", player2_secret_word)
else:
    print("It's a tie!")
    print("Player 1's secret word was", player1_secret_word)
    print("Player 2's secret word was", player2_secret_word)
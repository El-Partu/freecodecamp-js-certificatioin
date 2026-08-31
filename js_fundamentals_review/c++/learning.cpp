#include <iostream>
#include <array>
#include <vector>

using namespace std;

void AddTwoNumbers(int num1, int num2){
    cout << num1 + num2 <<endl;
}

float averageScores(array<float, 5>scores) {
    int sum = 0;
    for (int i = 0; i < scores.size(); i++) {
        sum += scores[i];
    }

    return sum / scores.size();
} 

int main(){
    /*
    cout <<"===================For loop==================="<<endl;
    for (int i = 0; i < 10; i++) {
        cout <<i<<endl;
    }

    cout <<"===================While loop==================="<<endl;
    int count = 0;

    while (count < 10){
        cout << count<<endl;
        count++;
    }

    cout << "===================Do while loop===================" <<endl;

    do {
        cout <<count <<endl;
        count++;
    } while(count < 10);

    // cout << "===================Printing out the sum of two numbers==================="<<endl;
    AddTwoNumbers(3, 6);
    cout << 20 << 21 <<endl;
    cout <<"Average scores: " << averageScores({23.4, 80.3, 10.5, 50.4, 65.5}) <<endl;
    */

    int  score = 9;
    int age = score;
    score = 40;
    cout <<"Score: " << score << endl;
    cout << "Age: " << age << endl;
    return 0;
}

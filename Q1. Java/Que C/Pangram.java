import java.util.HashSet;
import java.util.Scanner;

public class Pangram {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Sentences contains lowercase Alphabet(a-z): ");
        String str = sc.nextLine();
        String string[] = str.split(" ");
        HashSet<Character> set = new HashSet<>();
        for (int i = 0; i < string.length; i++){
            for (int j = 0; j < string[i].length(); j++){
                set.add(string[i].charAt(j));
            }
        }
        if (set.size() == 26) {
            System.out.println("String is Pangram");
        } else {
            System.out.println("String is not Panagram");
        }
    }
}
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class RomanInteger {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the Roman Number : ");
        String roman = sc.nextLine();

        System.out.println(romanToInt(roman));
    }

    public static int romanToInt(String s) {
        Map<Character, Integer> roman = new HashMap<>();
        roman.put('I', 1);
        roman.put('V', 5);
        roman.put('X', 10);
        roman.put('L', 50);
        roman.put('C', 100);
        roman.put('D', 500);
        roman.put('M', 1000);
        int integer = roman.get(s.charAt(s.length() - 1));
        for (int i = s.length() - 2; i >= 0; i--) {
            if ((roman.get(s.charAt(i + 1))) > (roman.get(s.charAt(i)))) {
                integer = integer - roman.get(s.charAt(i));
            } else {
                integer = integer + roman.get(s.charAt(i));
            }
        }
        return integer;
    }
}

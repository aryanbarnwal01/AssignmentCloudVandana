public class ShuffleArray {
    public static void main(String[] args) {
        int[] array = { 1, 2, 3, 4, 5, 6, 7 };
        // Function to Shuffle Array by taking parameter as array
        shuffleArray(array);
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }

    public static void shuffleArray(int[] array) {
        int n = array.length;
        for (int i = n - 1; i >= 0; i--) {
            // Random index is chosen between the index(5,1)
            int j = (int) (Math.random() * (i + 1));
            // Swaping is happening between random number between the index(0,6)
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}

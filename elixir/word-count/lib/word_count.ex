defmodule WordCount do
  @ascii_punctuation ~r/!|"|\#|\$|%|&|'|\(|\)|\*|\+|,|\.|\/|:|;|<|=|>|\?|@|\[|\\|]|\^|_|`|\{|\||}|~/

  def count(sentence) do
    sentence
    |> remove_special_chars
    |> String.downcase
    |> String.split
    |> build_counter
  end

  defp remove_special_chars(string) do    
    String.replace(string, @ascii_punctuation, " ")
  end

  defp build_counter(strings) do
    Enum.reduce(strings, %{}, &update_counter/2)
  end

  defp update_counter(string, counter) do
    Map.put(counter, string, new_counter(counter[string]))
  end

  defp new_counter(string_counter) do
    if string_counter do
      string_counter + 1
    else
      1
    end
  end
end

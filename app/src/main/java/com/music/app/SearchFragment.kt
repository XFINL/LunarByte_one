package com.music.app

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.fragment.app.commit
import androidx.core.content.ContextCompat
import com.music.app.databinding.FragmentSearchBinding

class SearchFragment : Fragment() {

    private var _binding: FragmentSearchBinding? = null
    private val binding get() = _binding!!
    private val searchHistory = mutableListOf<String>()

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentSearchBinding.inflate(inflater, container, false)
        return binding.root
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        binding.searchInput.setOnEditorActionListener { _, _, _ ->
            val query = binding.searchInput.text.toString()
            if (query.isNotEmpty()) {
                addToHistory(query)
                binding.searchInput.text.clear()
            }
            true
        }

        addSampleHistory()
        updateHistoryDisplay()
    }

    private fun addSampleHistory() {
        searchHistory.addAll(listOf("周杰伦", "林俊杰", "音乐", "Taylor Swift"))
    }

    private fun addToHistory(query: String) {
        if (!searchHistory.contains(query)) {
            if (searchHistory.size >= 20) {
                searchHistory.removeAt(0)
            }
            searchHistory.add(query)
            updateHistoryDisplay()
        }
    }

    private fun updateHistoryDisplay() {
        binding.historyContainer.removeAllViews()
        searchHistory.forEach { item ->
            val textView = TextView(requireContext())
            textView.text = item
            textView.textSize = 16f
            textView.setPadding(24, 20, 24, 20)
            textView.setBackgroundResource(R.drawable.glass_background)
            textView.setOnClickListener {
                Toast.makeText(requireContext(), "搜索: $item", Toast.LENGTH_SHORT).show()
            }
            textView.setOnLongClickListener {
                searchHistory.remove(item)
                updateHistoryDisplay()
                true
            }
            val params = ViewGroup.MarginLayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.WRAP_CONTENT
            )
            params.bottomMargin = 12
            textView.layoutParams = params
            binding.historyContainer.addView(textView)
        }
    }

    override fun onDestroyView() {
        super.onDestroyView()
        _binding = null
    }
}
